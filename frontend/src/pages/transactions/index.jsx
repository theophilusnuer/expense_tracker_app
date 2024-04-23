import { Box } from '@mui/material';
import SideBar from "../../components/side_bar";
import NavBar from "../../components/nav_bar";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";



export default function Transactions() {
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

      const id = data._id
    //   console.log(data);
      setTransactions(data);
    };
  
    useEffect(() => {
      getUserTransactions();
    });

    //Deleting a transaction
    // const id = 
    // const deleteTransaction = async () => {
    //     const response = await fetch(
    //         `${process.env.REACT_APP_OSIKANI_API_URL}/api/transactions/${id}?userId=${userId}`,
    //         {
    //             method:"DELETE",
    //           headers: {
    //             Authorization: `Bearer ${token}`,
    //           },
    //         }
    //       );
    //       console.log(response);
    // }

    return (
        <section className="bg-gray-10 flex">
            <div className="hidden md:block ">
                <SideBar />
            </div>

            <div className="w-full h-full lg:ml-8 md:ml-8">
                <NavBar />

                <Box
                    my={3}
                    sx={{ height: "auto", width: '97%', border: '1px solid #f3f4f6 ', borderRadius: '10px', boxShadow: "2px 5px 9px rgba(77, 146, 141, 1)", overflow: "hidden", }}>
                    <div style={{ color: '#4d928d' }}><p className="px-2 font-semibold">All Transactions</p></div>

                    <table className="bg-white shadow-lg w-full rounded-lg">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className=" px-4 py-2 text-left">Date</th>
                                <th className=" px-4 py-2 text-left">Title</th>
                                <th className=" px-4 py-2 text-left">Category</th>
                                <th className=" px-4 py-2 text-center">Description</th>
                                <th className=" px-4 py-2 text-center">Amount(GHC)</th>
                                <th className=" px-4 py-2 "></th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction._id} className="border-b border-gray-100">
                                <td className=" px-4 py-2">{transaction.date}</td>
                                <td className=" px-4 py-2">{transaction.title}</td>
                                <td className=" px-4 py-2">{transaction.category}</td>
                                <td className=" px-4 py-2 ">{transaction.description}</td>
                                <td className=" px-4 py-2 text-center">
                                    <p className=" rounded-lg bg-green-200">{transaction.amount}</p>
                                </td>
                                {/* <td className=" px-4 py-2 "> <DeleteIcon onClick={deleteTransaction} /> </td> */}
                            </tr> ))}                        
                        </tbody>
                    </table>

                </Box>
            </div>
        </section>

    );
}