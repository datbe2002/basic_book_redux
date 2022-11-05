import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

export default function DeleteBook({ book, reload }) {

    const [open, setOpen] = useState(false);
    // const [idUser, setIdUser] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteBook = async (id) => {
        const DeleteUrl = `https://6362307666f75177ea28c41b.mockapi.io/books/${id}`

        await axios.delete(DeleteUrl)
        reload()

    }
    return (
        <>


            <Button sx={{
                color: "white", fontWeight: "bold", backgroundColor: "#D53032", marginLeft: "1rem", "&:hover": {
                    color: 'white',
                    backgroundColor: '#7F1C1E'
                },
            }} onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure to delete this ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This action will delete all your information and no undo.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button sx={{
                        backgroundColor: "#1976D2", color: "white", fontWeight: "bold", "&:hover": {
                            color: 'white',
                            backgroundColor: '#0b5394'
                        },
                    }} onClick={() => handleDeleteBook(book.id)} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
