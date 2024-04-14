import NavBar from "../../components/nav_bar";
import SideBar from "../../components/side_bar";
import Box from '@mui/material/Box';


export default function UserProfile() {
  return (
    <section className="bg-gray-10 flex">
      <div className="hidden md:block ">
        <SideBar />
      </div>
      
      <div className="w-full">
        <NavBar />
<div className=" flex ">
<Box
      height={120}
      width={400}
      my={4}
      mx={4}
      display="flex"
      gap={4}
      p={2}
      sx={{ border: '1px solid #f3f4f6 ', borderRadius:'10px', boxShadow:"2px 5px 9px rgba(77, 146, 141, 1)" }}
    >
      <div style={{backgroundColor:'#4d928d'}} className="rounded-lg h-7 text-white outline-offset-4"><p className="px-2">NetWorth</p></div>
    </Box>

<div className="border rounded-md shadow-lg">dfdsfdsfds</div>
</div>

      </div>
    </section>
  );
}