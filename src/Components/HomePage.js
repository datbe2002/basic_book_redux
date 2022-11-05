import { Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function HomePage() {
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        async function fetchBooks() {
            const data = await axios.get('https://6362307666f75177ea28c41b.mockapi.io/books');

            const books = data.data

            setBookList(books)
            console.log(books)

        }
        fetchBooks()

    }, [])

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant='h3' sx={{ fontWeight: "bold", textAlign: "center", mb: 5 }}>Collection</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {bookList.map(book =>
                    <Grid item xs={2} sm={4} md={4} key={book.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={book.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {book.bookName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {book.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
    )




}


