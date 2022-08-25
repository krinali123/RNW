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
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { postmedicione } from '../../Redux/Action/medicion.action';

function Doctor(props) {

  const [open, setOpen] = React.useState(false);
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [quantity, setquantity] = useState('');
  // const [exapiry, setExapiry] = useState('');
  const [data, setData] = useState([]);
  const [Dopen, setDOpen] = useState(false);
  const [Did, setDid] = useState('');


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

  const handleDelete = () => {
      // console.log(params.id);
      const localdata = JSON.parse(localStorage.getItem("Medicine"));

      let fdata = localdata.filter((l, i) => l.id !== Did);

      localStorage.setItem("Medicine", JSON.stringify(fdata));

      getdata();
      handleClose();
      setDid();
      // console.log(fdata);

  }
  const handlesubmit = (values) => (dispatch) =>{
   
    console.log(values);
      let data = {
          id: Math.floor(Math.random() * 1000),
          ...values
     
      };
      
      dispatch(postmedicione())


      let localdata = JSON.parse(localStorage.getItem("Medicine"));

      if (localdata === null) {
          localStorage.setItem('Medicine', JSON.stringify([data]));
      }
      else {
          localdata.push(data);
          localStorage.setItem('Medicine', JSON.stringify(localdata));
      }
      handleClose(false);
      // setName('');
      // setPrice('');
      // setquantity('');
      // setExapiry('');
      getdata();
  }
  const getdata = () => {
      var localdata = JSON.parse(localStorage.getItem("Medicine"));
      if (localdata !== null) {
          setData(localdata);
      }

  }
  useEffect(() => {
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

                      <IconButton onClick={() => (params)} aria-label="edit" >
                          <EditIcon />
                      </IconButton>
                      </>
              )
          }
      },
      { field: 'edit', headerName: 'Edit', width: 130, margin:50 },
  ];

  let schema = yup.object().shape({
    name: yup.string().required('enter your medicion name'),
    price: yup.string().required('enter your medicion price'),
    quantity: yup.string().required('enter your medicion quantity'),
    exapiry: yup.string().required('enter your medicion exapiry')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      quantity: '',
      exapiry: ''
    },
    validationSchema:schema,
    onSubmit: values => {
      handlesubmit(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik.errors);
  console.log(formik.values.name);
  return (
    <>
      
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          add medicion
        </Button>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Medicine</DialogTitle>
          <Formik values={formik}>
            <Form onSubmit={formik.handleSubmit}>
          <DialogContent>
           
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Medicine name"
              name="name"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
            {
            formik.errors.name?<p>{formik.errors.name}</p>:null
            }
            <TextField
              autoFocus
              margin="dense"
              id="price"
              label="Medicine price"
              name="price"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
            {
              formik.errors.price?<p>{formik.errors.price}</p>:null
            }
            <TextField
              autoFocus
              margin="dense"
              id="quantity"
              label="Medicine quantity1"
              name=" quantity"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
           {
              formik.errors.quantity?<p>{formik.errors.quantity}</p>:null
           }
            <TextField
              autoFocus
              margin="dense"
              id="exapiry"
              label="Medicine exapiry"
              name="exapiry"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              />
             {
                formik.errors.exapiry?<p>{formik.errors.exapiry}</p>:null
             }
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit'>submit</Button>
          </DialogActions>
          </Form>
          </Formik>
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
      
    </>
  );
}

export default Doctor;