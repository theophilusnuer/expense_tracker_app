import { Box } from '@mui/material';
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export default function NetWorth() {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);

    // Retrieve token from session storage
    const token = sessionStorage.getItem("userToken");
    // Decode the token to get the payload
    const decodedToken = jwtDecode(token);
    // Access the userId from the decoded payload
    const userId = decodedToken.id;

    const fetchTransactionTotals = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_OSIKANI_API_URL}/api/transactions?userId=${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const data = await response.json();
        // Calculate total income
        const incomeTransactions = data.filter(transaction => transaction.type === "income");
        const totalIncomeAmount = incomeTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
        setTotalIncome(totalIncomeAmount);
        // Calculate total expense
        const expenseTransactions = data.filter(transaction => transaction.type === "expense");
        const totalExpenseAmount = expenseTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
        setTotalExpense(totalExpenseAmount);
    };

    useEffect(() => {
        fetchTransactionTotals();
    });

    return (
        <Box
            my={3}
            sx={{
                height: "auto",
                width: '100%',
                border: '1px solid #f3f4f6 ',
                borderRadius: '10px',
                boxShadow: "2px 5px 9px rgba(77, 146, 141, 1)",
                overflow: "hidden",
            }}
        >
            <div style={{ backgroundColor: '#4d928d', width: "30%" }} className="rounded-lg h-7 ml-3 mt-2">
                <p className="px-2 text-white font-semibold text-center">NetWorth</p>
            </div>
            <div className='ml-3 my-2'>
                <p className='font-bold text-3xl'>GHC {totalIncome - totalExpense}</p>
            </div>

            <div className='mr-10 ml-3 flex justify-between'>
                <p className='font-semibold'>Income: GHC {totalIncome}</p>
                <p className='font-semibold'>Expense: GHC {totalExpense}</p>
            </div>
        </Box>
    );
}
