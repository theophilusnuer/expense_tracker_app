import { Box } from '@mui/material';



export default function NetWorth(){
    return(
        <Box
              my={3}
              sx={{ height: 120, width: '100%', border: '1px solid #f3f4f6 ', borderRadius: '10px', boxShadow: "2px 5px 9px rgba(77, 146, 141, 1)" }}>
              <div style={{ backgroundColor: '#4d928d', width: "25%" }} className="rounded-lg h-7 ml-3 mt-2">
                <p className="px-2 text-white font-semibold text-center">NetWorth</p>
              </div>
              <div className='ml-3 my-2'>
                <p className='font-bold text-3xl'>GHC 700</p>
              </div>

              <div className='mr-10 ml-3 flex justify-between'>
                <p className='font-semibold'>Income: GHC 1000 </p>
                <p className='font-semibold'>Expense: GHC 300</p>
              </div>
            </Box>
    );
}