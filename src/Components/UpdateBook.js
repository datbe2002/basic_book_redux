import { Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateBook } from "../Redux/apiRequest";

export default function UpdateBook({ book, reload }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: book.id,
      image: book.image,
      bookName: book.bookName,
      quantity: book.quantity,
      description: book.description,
    },
    onSubmit: (values) => {
      const newObject = values;

      console.log(newObject);

      updateBook(dispatch, newObject);

      handleClose();
    },
    validationSchema: Yup.object({
      image: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      bookName: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      quantity: Yup.number()
        .integer()
        .typeError("Please enter a valid number")
        .required("Required."),
      description: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
    }),
  });

  return (
    <div>
      <Button
        sx={{
          color: "white",
          fontWeight: "bold",
          backgroundColor: "#09BFB8",
          "&:hover": {
            color: "white",
            backgroundColor: "#034C49",
          },
        }}
        onClick={handleOpen}
      >
        Update
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ padding: "150px 500px 50px 500px" }}>
          <Paper>
            <Box p={5}>
              <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
                textAlign={"center"}
              >
                Update {book.bookName} book
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  label="Image"
                  placeholder="Type your image URL"
                  variant="outlined"
                  name="image"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  error={formik.touched.image && Boolean(formik.errors.image)}
                  helperText={formik.touched.image && formik.errors.image}
                ></TextField>
                <TextField
                  fullWidth
                  label="Name"
                  placeholder="Type your book name"
                  sx={{ marginTop: "20px" }}
                  variant="outlined"
                  name="bookName"
                  value={formik.values.bookName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.bookName && Boolean(formik.errors.bookName)
                  }
                  helperText={formik.touched.bookName && formik.errors.bookName}
                ></TextField>
                <TextField
                  fullWidth
                  label="Quantity"
                  type="number"
                  sx={{ marginTop: "20px" }}
                  variant="outlined"
                  name="quantity"
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.quantity && Boolean(formik.errors.quantity)
                  }
                  helperText={formik.touched.quantity && formik.errors.quantity}
                ></TextField>
                <TextField
                  fullWidth
                  label="Description"
                  placeholder="Type anything you likeee"
                  sx={{ marginTop: "20px" }}
                  variant="outlined"
                  multiline
                  rows={4}
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                ></TextField>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 10,
                    marginTop: 20,
                  }}
                >
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: "#236DC9",
                      color: "white",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#154178",
                      },
                    }}
                    disabled={!formik.dirty}
                  >
                    Submit
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "#FF0000",
                      color: "white",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#880808",
                      },
                    }}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}
