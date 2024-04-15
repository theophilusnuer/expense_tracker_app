import { Box } from '@mui/material';


export default function Recent(){
    return(
        <Box
              my={3}
              mr={2}
              sx={{ height: "auto", width: '96%', border: '1px solid #f3f4f6 ', borderRadius: '10px', boxShadow: "2px 5px 9px rgba(77, 146, 141, 1)",overflow: "hidden", }}>
              <div style={{ color: '#4d928d' }}><p className="px-2 font-semibold">Recent Transactions</p></div>

              <table className="bg-white shadow-lg w-full rounded-lg">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className=" px-4 py-2 text-left">Date</th>
                            <th className=" px-4 py-2 text-left">Title</th>
                            <th className=" px-4 py-2 text-left">Category</th>
                            <th className=" px-4 py-2 text-center">Description</th>
                            <th className=" px-4 py-2 text-center">Amount(GHC)</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr  className="border-b border-gray-100">
                                <td className=" px-4 py-2">21-04-2024</td>
                                <td className=" px-4 py-2">Rent</td>
                                <td className=" px-4 py-2">Utilities</td>
                                <td className=" px-4 py-2">rent advance for 2 years starting june 2024</td>
                                <td className=" px-4 py-2 text-center">
                                    <p className=" rounded-lg bg-green-200">7000</p>
                                </td>
                            </tr>
                            <tr  className="border-b border-gray-100">
                                <td className=" px-4 py-2">21-04-2024</td>
                                <td className=" px-4 py-2">Rent</td>
                                <td className=" px-4 py-2">Utilities</td>
                                <td className=" px-4 py-2">rent advance for 2 years starting june 2024</td>
                                <td className=" px-4 py-2 text-center">
                                    <p className=" rounded-lg bg-green-200">7000</p>
                                </td>
                            </tr>
                            <tr  className="border-b border-gray-100">
                                <td className=" px-4 py-2">21-04-2024</td>
                                <td className=" px-4 py-2">Rent</td>
                                <td className=" px-4 py-2">Utilities</td>
                                <td className=" px-4 py-2">rent advance for 2 years starting june 2024</td>
                                <td className=" px-4 py-2 text-center">
                                    <p className=" rounded-lg bg-green-200">7000</p>
                                </td>
                            </tr>
                            <tr  className="border-b border-gray-100">
                                <td className=" px-4 py-2">21-04-2024</td>
                                <td className=" px-4 py-2">Rent</td>
                                <td className=" px-4 py-2">Utilities</td>
                                <td className=" px-4 py-2">rent advance for 2 years starting june 2024</td>
                                <td className=" px-4 py-2 text-center">
                                    <p className=" rounded-lg bg-green-200">7000</p>
                                </td>
                            </tr>
                            <tr  className="border-b border-gray-100">
                                <td className=" px-4 py-2">21-04-2024</td>
                                <td className=" px-4 py-2">Rent</td>
                                <td className=" px-4 py-2">Utilities</td>
                                <td className=" px-4 py-2">rent advance for 2 years starting june 2024</td>
                                <td className=" px-4 py-2 text-center">
                                    <p className=" rounded-lg bg-green-200">7000</p>
                                </td>
                            </tr>
                      
                    </tbody>
                </table>

            </Box>
    );
}