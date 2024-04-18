import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';

export default function AddExpense() {
    const categories = [
        {
            id: '1',
            name: 'Transport (Eg. fuel,repairs, etc)',
        },
        {
            id: '2',
            name: 'Food & Groceries (Eg. foodstuff,toiletries, etc)',
        },
        {
            id: '3',
            name: 'Utilities (Eg. lightbill,waterbill,rent, etc.)',
        },
        {
            id: '4',
            name: 'Personal & Health (Eg. insurance,gym,grooming, etc.)',
        },
    ];
    const [loading, setLoading] = useState(false);

    const addExpense = async (event) => {
        setLoading(true);

        event.preventDefault();
        const formData = new FormData
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' }, 
            }}
            noValidate
            autoComplete="on"
        >
            <div>
                <TextField
                    required
                    id="outlined-title"
                    size='small'
                    label="Title"
                />
                <TextField
                    required
                    id="outlined-description-flexible"
                    size='small'
                    label="Description"
                    multiline
                    maxRows={3}
                />
                <TextField
                    required
                    id="outlined-select-category"
                    select
                    size='small'
                    label="Select a category"
                >
                    {categories.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <div style={{ display: 'flex', width:'100%' }}>
                    <TextField
                        required
                        id="outlined-date"
                        size='small'
                        type='date'
                    />
                    <TextField
                        required
                        id="outlined-amount"
                        size='small'
                        type='number'
                        label='Amount (GHC)'
                    />
                </div>
            </div>
            <div className='flex' style={{ margin: '1rem 0', width: '100%' }}>
                <LoadingButton
                    // loading={loading}
                    type="submit"
                    size="small"
                    style={{ width: '100%', marginLeft: '10px', backgroundColor: '#4d928d', color: 'white' }}> 
                    Add Expense
                </LoadingButton>
            </div>
        </Box>
    );
}
