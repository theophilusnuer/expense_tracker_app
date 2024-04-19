import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function AddBudget() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addBudget = async (event) => {
    console.log(event)
    // setLoading(true);
    event.preventDefault();
    //Get form data
    const formData = new FormData(event.target);
    console.log(formData);
    //Post to backend
    const response = await fetch(
      `${process.env.REACT_APP_OSIKANI_API_URL}/api/budgets`,
      {
        method: "POST",
        body: JSON.stringify({
          title: formData.get("title"),
          description: formData.get("description"),
          date: formData.get("date"),
          amount: formData.get("amount"),
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    console.log(response);
  };

  return (
    <React.Fragment>
      <Button
        style={{
          color: "white",
          backgroundColor: "#4d928d",
          marginBottom: "10px",
        }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Add a Budget
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Budget</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={addBudget}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="on"
          >
            <div>
              <TextField
                required
                id="outlined-title"
                size="small"
                label="Title"
                name="title"
              />
              <TextField
                required
                id="outlined-description-flexible"
                size="small"
                label="Description"
                multiline
                maxRows={3}
                name="description"
              />

              <div style={{ display: "flex", width: "100%" }}>
                <TextField
                  required
                  id="outlined-date"
                  size="small"
                  type="date"
                  name="date"
                />
                <TextField
                  required
                  id="outlined-amount"
                  size="small"
                  type="number"
                  label="Amount (GHC)"
                  name="amount"
                />
              </div>
            </div>
            <div className="flex" style={{ margin: "1rem 0", width: "100%" }}>
              <LoadingButton
                loading={loading}
                type="submit"
                size="small"
                style={{
                  width: "100%",
                  marginLeft: "10px",
                  backgroundColor: "#4d928d",
                  color: "white",
                }}
              >
                Add Budget
              </LoadingButton>
            </div>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
