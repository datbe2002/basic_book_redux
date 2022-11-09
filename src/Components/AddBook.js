import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
    const nav = useNavigate()

    const formik = useFormik({
        initialValues: {
            id: '',
            image: '',
            bookName: '',
            quantity: '',
            description: '',
        },
        onSubmit: (values) => {
            const newObject = values

            // console.log({ ...newObject, id: uuid() })

            const addBookUrl = "https://6362307666f75177ea28c41b.mockapi.io/books"

            const addNewBook = async () => {
                await axios.post(addBookUrl, {
                    image: newObject.image,
                    bookName: newObject.bookName,
                    quantity: newObject.quantity,
                    description: newObject.description,
                })
            }
            addNewBook()

        },
        validationSchema: Yup.object({

            image: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
            bookName: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            quantity: Yup.number().integer().typeError("Please enter a valid number").required("Required."),
            description: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),

        }),
    });

    return (
        <Box p={5}>
            <Paper>

                <Box p={5}>
                    <Typography
                        variant="h6"
                        color="textSecondary"
                        component="h2"
                        gutterBottom
                        textAlign={"center"}
                    >
                        Add a new book
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            label='Image'
                            placeholder='Type your image URL'
                            variant="outlined"
                            name='image'
                            value={formik.values.image}
                            onChange={formik.handleChange}
                            error={formik.touched.image && Boolean(formik.errors.image)}
                            helperText={formik.touched.image && formik.errors.image}>

                        </TextField>
                        <TextField
                            fullWidth
                            label='Name'
                            placeholder='Type your book name'
                            sx={{ marginTop: "20px" }}
                            variant="outlined"
                            name='bookName'
                            value={formik.values.bookName}
                            onChange={formik.handleChange}
                            error={formik.touched.bookName && Boolean(formik.errors.bookName)}
                            helperText={formik.touched.bookName && formik.errors.bookName}>

                        </TextField>
                        <TextField
                            fullWidth
                            label='Quantity'
                            type='number'
                            sx={{ marginTop: "20px" }}
                            variant="outlined"
                            name='quantity'
                            value={formik.values.quantity}
                            onChange={formik.handleChange}
                            error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                            helperText={formik.touched.quantity && formik.errors.quantity}></TextField>
                        <TextField
                            fullWidth
                            label='Description'
                            placeholder='Type anything you likeee'
                            sx={{ marginTop: "20px" }}
                            variant="outlined"
                            multiline
                            rows={4}
                            name='description'
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}></TextField>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                            <Button type='submit' sx={{
                                backgroundColor: "#236DC9", color: "white", fontWeight: "bold", "&:hover": {
                                    backgroundColor: "#154178"
                                }
                            }} disabled={!formik.dirty} onClick={() => nav('/dashboard')}>
                                Add
                            </Button>
                        </div>
                    </form>
                </Box>
            </Paper>
        </Box>
    )
}
