/*
    This modal is shown when the user asks to delete a list. Note 
    that before this is shown a list has to be marked for deletion,
    which means its id has to be known so that we can retrieve its
    information and display its name in this modal. If the user presses
    confirm, it will be deleted.
    
    @author McKilla Gorilla
*/
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import Stack from '@mui/material/Stack';

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
    }
    function handleCloseModal() {
        store.hideDeleteListModal();
    }

  return (
    <div>
      <Modal
        className="modal"
        id="delete-modal"
        data-animation="slideInOutLeft"
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-dialog">
          <Typography id="modal-modal-title" className="dialog-header" variant="h6" component="h2">
            Delete the Top 5 {name} List?
            <Stack direction="row" spacing={2}>
              <Button 
                id="dialog-yes-button"  
                className="modal-button"
                onClick={handleDeleteList}
                variant="contained">
                  Confirm
              </Button>
              <Button 
                id="dialog-no-button"
                className="modal-button"
                onClick={handleCloseModal}
                variant="contained">
                  Cancel
              </Button>
            </Stack>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
