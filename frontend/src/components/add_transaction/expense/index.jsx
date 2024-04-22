import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import  { useRef } from "react";



export default function AddExpense() {
    const categories = [
        {
            id: 'transport',
            name: 'Transport (Eg. fuel,repairs, etc)',
        },
        {
            id: 'food & groceries',
            name: 'Food & Groceries (Eg. foodstuff,toiletries, etc)',
        },
        {
            id: 'utilities',
            name: 'Utilities (Eg. lightbill,waterbill,rent, etc.)',
        },
        {
            id: 'personal & health',
            name: 'Personal & Health (Eg. insurance,gym,grooming, etc.)',
        },
    ];
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate('');
    const formRef = useRef(null);

    const addExpense = async (event) => {
        setLoading(true);
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
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
            console.log(userId);
            // Post to backend with userID included in the body
            const response = await fetch(
                `${process.env.REACT_APP_OSIKANI_API_URL}/api/transactions`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        title: formData.get("title"),
                        description: formData.get("description"),
                        date: formData.get("date"),
                        amount: formData.get("amount"),
                        category: formData.get("category"),
                        userId: userId,
                        type: "expense",
                    }),
                    headers: {
                        "Content-type": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
            setLoading(false);
            if (!response.ok) {
                throw new Error('Failed to add expense');
            }
            // Handle successful response
            alert('Expense added successfully');
            //reset form field
            formRef.current.reset();
            //navigate to home
            navigate('/');

        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="on"
            onSubmit={addExpense}
            ref={formRef}
        >
            <div>
                <TextField
                    required
                    id="outlined-title"
                    size='small'
                    label="Title"
                    name='title'
                />
                <TextField
                    required
                    id="outlined-description-flexible"
                    size='small'
                    label="Description"
                    name='description'
                    multiline
                    maxRows={3}
                />
                <TextField
                    required
                    id="outlined-select-category"
                    select
                    size='small'
                    label="Select a category"
                    name='category'
                >
                    {categories.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <div style={{ display: 'flex', width: '100%' }}>
                    <TextField
                        required
                        id="outlined-date"
                        size='small'
                        type='date'
                        name='date'
                    />
                    <TextField
                        required
                        id="outlined-amount"
                        size='small'
                        type='number'
                        label='Amount (GHC)'
                        name='amount'
                    />
                </div>
            </div>
            <div className='flex' style={{ margin: '1rem 0', width: '100%' }}>
                <LoadingButton
                    loading={loading}
                    type="submit"
                    size="small"
                    style={{ width: '100%', marginLeft: '10px', backgroundColor: '#4d928d', color: 'white' }}>
                    Add Expense
                </LoadingButton>
            </div>
        </Box>
    );
}
