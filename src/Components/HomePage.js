import { Button, Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BookDetailPage from './BookDetailPage';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../Redux/apiRequest';


export default function HomePage() {
    const bookList = useSelector((state) => state.books.books?.allBooks);
    const dispatch = useDispatch();
    console.log(bookList)
    // const [bookList, setBookList] = useState([]);
    // useEffect(() => {
    //     async function fetchBooks() {
    //         const data = await axios.get('https://6362307666f75177ea28c41b.mockapi.io/books');

    //         const books = data.data

    //         setBookList(books)
    //         console.log(books)

    //     }
    //     fetchBooks()

    // }, [])

    useEffect(() => {

        // if (user?.accessToken) {
        //     getAllUsers(user?.accessToken, dispatch)
        // }
        getAllBooks(dispatch)
    }, []);

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center", mb: 5 }}>Book</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {bookList.map(book =>
                    <Grid item xs={2} sm={4} md={4} key={book.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto:(("
                                    image={book.image}
                                    alt={book.bookName}
                                />
                                <CardContent sx={{ textAlign: "center", }}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {book.bookName}
                                    </Typography>
                                    <Button sx={{ backgroundColor: "#36454F" }}>
                                        <Link to={`/book-detail/${book.id}`} style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>Read more</Link>
                                    </Button>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
    )




}


