import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Typography } from '@mui/material';
import Description from './Description';
import DeleteBook from './DeleteBook';
import UpdateBook from './UpdateBook';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../Redux/apiRequest';
// import { deleteUserForm, updateUserFormName } from "../Redux/Form";

export default function ModifyPage() {

    const nav = useNavigate()
    const dispatch = useDispatch()
    const bookList = useSelector((state) => state.books.books?.allBooks);
    const [isReload, setIsReload] = useState(0);

    useEffect(() => {
        // async function fetchBooks() {
        //     const data = await axios.get('https://6362307666f75177ea28c41b.mockapi.io/books');

        //     const books = data.data

        //     setBookList(books)
        //     console.log(books)

        // }
        // fetchBooks()
        getAllBooks(dispatch)
    }, [isReload])

    const handleReload = () => {
        setIsReload(isReload + 1);
    }
    const handleNavToAddPage = () => {
        let path = "/add-book"
        nav(path)
    }

    return (
        <Box p={5}>
            <Box p={5}>
                <Box p={5} sx={{ display: "flex", justifyContent: "right", alignItems: "center", gap: 5 }}>
                    <Typography variant='h6'>Add a new book</Typography>

                    <Paper>
                        <Button onClick={handleNavToAddPage}>
                            <AddBoxOutlinedIcon />

                        </Button>


                    </Paper>
                </Box>
                <Paper>
                    <Table >

                        <TableHead>
                            <TableRow >
                                <TableCell>Picture</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell sx={{ justifyContent: "right", display: "flex", paddingRight: "5rem" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookList.map((book) => (
                                <TableRow key={book.id}>
                                    <img style={{ width: "50%", height: "auto" }} src={book.image}></img>
                                    <TableCell>{book.bookName}</TableCell>
                                    <TableCell>{book.quantity}</TableCell>
                                    <TableCell>
                                        <Button>
                                            <Description book={book} />
                                        </Button>
                                    </TableCell>
                                    <TableCell sx={{ justifyContent: "right", display: "flex", paddingTop: "2.3rem", borderBottom: "none" }}>
                                        <UpdateBook book={book} reload={() => { handleReload() }} ></UpdateBook>
                                        <DeleteBook book={book} reload={() => { handleReload() }} ></DeleteBook>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </Paper>

            </Box>

        </Box>

    )
}

