import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import   CircleLoader from "react-spinners/CircleLoader";
import { getmedicion, postmedicione, deletemedicines, updateMedicine } from '../Redux/Action/medicion.action';

function Medicine(props) {

    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [exapiry, setExapiry] = useState('');
    const [data, setData] = useState([]);
    const [Dopen, setDOpen] = useState(false);
    const [Did, setDid] = useState('');
    const [update, setUpdate] = useState('');

    const [filterdata, setFilterdata] = useState([]);

    const medicines = useSelector(state => state.medicion);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDOpen(false);

    };

    const handleDClickOpen = (params) => {
        setDOpen(true);
        setDid(params.id);
    };

    const handleDClose = () => {
        setDOpen(false);

    };

    const handleDelete = (values) => {
        // console.log(params.id);
        // const localdata = JSON.parse(localStorage.getItem("Medicine"));

        // let fdata = localdata.filter((l, i) => l.id !== Did);

        // localStorage.setItem("Medicine", JSON.stringify(fdata));
        dispatch(deletemedicines(Did))
        getdata();
        handleClose();
        setDid();
        // console.log(fdata);

    }

    const handlesubmit = () => {
        let data = {
            id: Math.floor(Math.random() * 1000),
            name,
            price,
            quantity,
            exapiry
        };
        console.log(data);
        dispatch(postmedicione(data))

        // let localdata = JSON.parse(localStorage.getItem("Medicine"));

        // if (localdata === null) {
        //     localStorage.setItem('Medicine', JSON.stringify([data]));
        // }
        // else {
        //     localdata.push(data);
        //     localStorage.setItem('Medicine', JSON.stringify(localdata));
        // }

        handleClose(false);
        setName('');
        setPrice('');
        setQuantity('');
        setExapiry('');
        setOpen(false);
        getdata();
    }
    const handleUpdate = (values) => {

        dispatch(updateMedicine(data))
        setUpdate()
        setOpen(true);
        getdata();
    }

    const getdata = () => {
        // var localdata = JSON.parse(localStorage.getItem("Medicine"));

        // if (localdata !== null) {
        //     setData(localdata);
        // }
        setData(medicines.medicion)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getmedicion())
        getdata();
    }, [])


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'exapiry', headerName: 'Exapiry', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton onClick={() => handleDClickOpen(params)} aria-label="delete" >
                            <DeleteIcon />
                        </IconButton>

                        <IconButton onClick={() => handleUpdate(params)} aria-label="edit" >
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }
        },
        { field: 'edit', headerName: 'Edit', width: 130, },
    ];
    const handleserch = (val) => {
        // console.log(val);
        let localData = JSON.parse(localStorage.getItem("Medicine"));
        // console.log(localData);
        let fData = localData.filter((l) => (l.id.toString().includes(val) ||
            l.name.toString().toLowerCase().includes(val.toLowerCase()) ||
            l.price.toString().includes(val) ||
            l.quantity.toString().includes(val) ||
            l.exapiry.toString().includes(val)

        ))

        setFilterdata(fData);
        console.log(fData);

    }
    let finaldata = filterdata.length > 0 ? filterdata : data

    console.log(medicines);
    return (

        <>
            {
                medicines.isLoading ?

                    <CircleLoader />
                    :
                    <div>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="search"
                            label="Medicine name"
                            name="search"
                            fullWidth
                            variant="standard"
                            onChange={(e) => handleserch(e.target.value)}
                        />
                        <Button variant="outlined" onClick={handleClickOpen}>
                            add medicion
                        </Button>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={medicines.medicion}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                            />
                        </div>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Medicine</DialogTitle>
                            <DialogContent>

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Medicine name"
                                    name="name"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="price"
                                    label="Medicine price"
                                    name="price"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="exapiry"
                                    label="Medicine quantity"
                                    name=" quantity"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="exapiry"
                                    label="Medicine exapiry"
                                    name="exapiry"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setExapiry(e.target.value)}

                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handlesubmit}>submit</Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog
                            open={Dopen}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"are you sure?"}
                            </DialogTitle>
                            <DialogActions>
                                <Button onClick={handleClose}>No</Button>
                                <Button onClick={handleDelete} autoFocus>
                                    Yes
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
            }




        </>
    );
}

export default Medicine;