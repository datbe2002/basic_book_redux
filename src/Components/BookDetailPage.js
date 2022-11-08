import { async } from '@firebase/util';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, dividerClasses, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function BookDetailPage() {

    const [bookList, setBookList] = useState([]);
    const bookId = useParams()

    useEffect(() => {
        async function fetchBooks() {
            const data = await axios.get(`https://6362307666f75177ea28c41b.mockapi.io/books/${bookId.id}`);

            const books = data.data

            setBookList(books)
            console.log(books)

        }
        fetchBooks()

    }, [])


    return (
        <Box p={5}>
            <Paper>
                <Box p={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <img src={bookList.image} style={{ width: "100%", height: "auto" }} alt={bookList.bookName}></img>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper>
                                <Box p={5}>
                                    <Typography variant='h10' sx={{ color: "gray" }}>Author: {bookList.author}</Typography>
                                    <Typography sx={{ mt: 2, mb: 2 }} variant='h4'>{bookList.bookName}</Typography>
                                    <Typography variant='h8'>Quantity restock: {bookList.quantity}</Typography>
                                    <Divider sx={{ mt: 5, mb: 3 }}></Divider>
                                    <Typography sx={{ textAlign: "center", mt: 2, mb: 2 }}> Description for {bookList.bookName}</Typography>
                                    <Typography> {bookList.description}</Typography>

                                </Box>

                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
        // <div>aaaa</div>
    )
}
