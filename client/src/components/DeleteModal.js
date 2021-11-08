import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import { useContext } from 'react'
import { GlobalStoreContext } from '../store'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal() {
  const { store } = useContext(GlobalStoreContext);
  let name = "";
  if (store.currentList) {
        name = store.currentList.name;
  }

  function handleDeleteList() {
    store.deleteMarkedList();
    isOpen=false;
  }

  function handleClose(){ 
    store.unmarkListForDeletion();
    isOpen=false;
  }

  let isOpen=false;
  if (store.listMarkedForDeletion){
    isOpen=true;
  }

  return (
    <div>
      <Modal
        className="modal"
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete the Top 5 {name} List?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button onClick={handleDeleteList}>Confirm</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}