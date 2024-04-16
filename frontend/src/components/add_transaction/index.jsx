import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import AddIncome from './income';
import AddExpense from './expense';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function AddTransaction() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box
            sx={{ height:"auto", width: '100%', border: '1px solid #f3f4f6 ', borderRadius: '10px', boxShadow: "2px 5px 9px rgba(77, 146, 141, 1)" }}>

            <div>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    indicatorColor='#4d928d'
                >
                    <Tab label="Add Income" id="tab-0"
                        sx={{
                            fontWeight: 'bold',
                            color: "black",
                            '&.Mui-selected': {
                                color: '#4d928d',
                                borderBottom: '1px solid #4d928d',
                            },
                        }}>
                    </Tab>
                    
                    <Tab label="Add Expense" id="tab-1" 
                     sx={{
                        fontWeight: 'bold',
                        color: "black",
                        '&.Mui-selected': {
                            color: '#4d928d',
                            borderBottom: '1px solid #4d928d',
                        },
                    }}/>
                </Tabs>
                <TabPanel value={value} index={0}>
                    <AddIncome/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <AddExpense/>
                </TabPanel>
            </div>


        </Box>
    );
}