import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRef } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function AddBudget() {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);
  const [budgets, setBudgets] = useState([]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  // Retrieve token from session storage
  const token = sessionStorage.getItem('userToken');

  // Check if token exists
  if (!token) {
    throw new Error('Token not found in session storage');
  }
  // Decode the token to get the payload
  const decodedToken = jwtDecode(token);

  if (!decodedToken || !decodedToken.id) {
    throw new Error('Invalid token');
  }
  // Access the userId from the decoded payload
  const userId = decodedToken.id;
  
  const getUserBudgets = async () => {
      const response = await fetch(
          `${process.env.REACT_APP_OSIKANI_API_URL}/api/budgets?userId=${userId}`,
          {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }
      );
      const data = await response.json();
      //sort budgets as the most recent added budget
      const sortedBudgets = data.sort((a, b) => b._id.localeCompare(a._id));
      setBudgets(sortedBudgets);
  };

  useEffect(() => {
      getUserBudgets();
  },);


  const addBudget = async (event) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);

    try {

      // Post to backend with userID included in the body
      const response = await fetch(
        `${process.env.REACT_APP_OSIKANI_API_URL}/api/budgets`,
        {
          method: "POST",
          body: JSON.stringify({
            title: formData.get("title"),
            description: formData.get("description"),
            date: formData.get("date"),
            amount: formData.get("amount"),
            userId: userId,
          }),
          headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add budget');
      }
      // Handle successful response
      toast.success('Budget added successfully');
      //reset form field
      formRef.current.reset();
      //navigate to home
      setOpen(false);

    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to add budget');
    }
  };



  return (
    <React.Fragment>
      <Box
        my={3}
        mr={2}
        sx={{ height: "auto", width: '96%', border: '1px solid #f3f4f6 ', borderRadius: '10px', boxShadow: "2px 2px 3px rgba(77, 146, 141, 1)", overflow: "hidden", }}>
        <div style={{ color: '#4d928d' }}><p className="px-2 font-semibold">Most Recent Budget</p></div>

        <table className="bg-white shadow-lg w-full rounded-lg">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className=" px-4 py-2 text-left">Date</th>
                                <th className=" px-4 py-2 text-left">Title</th>
                                <th className=" px-4 py-2 text-left">Description</th>
                                <th className=" px-4 py-2 text-center">Amount(GHC)</th>
                                <th className=" px-4 py-2 "></th>
                            </tr>
                        </thead>
                        <tbody>
                        {budgets.length === 0 && <div className="text-2xl text-center font-bold ">No Budget for today? </div>}
                            {budgets.slice(0,1).map((budget) => (
                                <tr key={budget._id} className="border-b border-gray-100">
                                    <td className=" px-4 py-2">{budget.date}</td>
                                    <td className=" px-4 py-2">{budget.title}</td>
                                    <td className=" px-4 py-2 ">{budget.description}</td>
                                    <td className=" px-4 py-2 text-center">
                                        <p className="font-bold">{budget.amount}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

      </Box>



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
            ref={formRef}
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
                // loading={loading}
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
      <ToastContainer/>
    </React.Fragment>
  );
}
