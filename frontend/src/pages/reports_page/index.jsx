import { Box } from '@mui/material';
import SideBar from "../../components/side_bar";
import NavBar from "../../components/nav_bar";




export default function Reports() {
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
                    <p className='text-3xl font-bold text-center p-5 flex flex-col'>Under development</p>
                    <p className='pb-5 text-center'>Coming soon</p>
                </Box>
            </div>
        </section>

    );
}