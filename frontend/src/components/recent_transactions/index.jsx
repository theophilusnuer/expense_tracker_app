import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";



export default function Recent() {
    const [transactions, setTransactions] = useState([]);

    // Retrieve token from session storage
    const token = sessionStorage.getItem("userToken");
    // Decode the token to get the payload
    const decodedToken = jwtDecode(token);
    // Access the userId from the decoded payload
    const userId = decodedToken.id;
    const getUserTransactions = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_OSIKANI_API_URL}/api/transactions?userId=${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const data = await response.json();
         //sort budgets as the most recent added tarnsaction
         const sortedTransaction = data.sort((a, b) => b._id.localeCompare(a._id));
         setTransactions(sortedTransaction);
    };

    useEffect(() => {
        getUserTransactions();
    });

    //Deleting a transaction
    const deleteTransaction = async (transaction) => {
        const response = await fetch(
            `${process.env.REACT_APP_OSIKANI_API_URL}/api/transactions/${transaction._id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        alert("Transaction Deleted Successfully");
    }

    return(
        <Box
              my={3}
              mr={2}
              sx={{ height: "auto", width: '96%', border: '1px solid #f3f4f6 ', borderRadius: '10px', boxShadow: "2px 5px 9px rgba(77, 146, 141, 1)",overflow: "hidden", }}>
              <div style={{ color: '#4d928d' }}><p className="px-2 font-semibold"> Five (5) Recent Transactions</p></div>

              <table className="bg-white shadow-lg w-full rounded-lg">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className=" px-4 py-2 text-left">Date</th>
                                <th className=" px-4 py-2 text-left">Title</th>
                                <th className=" px-4 py-2 text-left">Category</th>
                                <th className=" px-4 py-2 text-left">Description</th>
                                <th className=" px-4 py-2 text-center">Amount(GHC)</th>
                                <th className=" px-4 py-2 "></th>
                            </tr>
                        </thead>
                        <tbody>
                        {transactions.length === 0 && <div className="text-2xl text-center font-bold ">No transactions </div>}
                            {transactions.slice(0,5).map((transaction) => (
                                <tr key={transaction._id} className="border-b border-gray-100">
                                    <td className=" px-4 py-2">{transaction.date}</td>
                                    <td className=" px-4 py-2">{transaction.title}</td>
                                    <td className=" px-4 py-2">{transaction.category}</td>
                                    <td className=" px-4 py-2 ">{transaction.description}</td>
                                    <td className=" px-4 py-2 text-center">
                                        <p className={transaction.type === "income" ? "rounded-lg bg-green-200" : "rounded-lg bg-red-300"}>{transaction.amount}</p>
                                    </td>
                                    <td className=" px-4 py-2 "> <DeleteIcon onClick={() => deleteTransaction(transaction) } /> </td>
                                </tr>))}
                        </tbody>
                    </table>

            </Box>
    );
}