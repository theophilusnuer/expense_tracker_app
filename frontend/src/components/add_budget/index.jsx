import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';


export default function AddBudget() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button style={{ color: "white", backgroundColor: "#4d928d", marginBottom: "10px" }}
                variant="contained" onClick={handleClickOpen}>
                Add a Budget
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Budget</DialogTitle>
                <DialogContent>

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

                            <div style={{ display: 'flex', width: '100%' }}>
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
                                Add Budget
                            </LoadingButton>
                        </div>
                    </Box>
                </DialogContent>

            </Dialog>
        </React.Fragment>
    );
}