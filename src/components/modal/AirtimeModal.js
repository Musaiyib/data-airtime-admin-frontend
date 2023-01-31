import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AirtimeModal = ({ subTitle, handleOpenModal, handleOpenEditModal, open, val }) => {
  const [amount, setAmount] = useState(val ? val?.amount : null);
  const [network, setNetwork] = useState(val ? val?.network : '');
  const [error, setError] = useState('');
  const editPlan = (data) => {
    axios
      .put(`http://localhost:4000/api/subscription/airtime/${val._id}`, data)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        handleOpenEditModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const createPlan = (data) => {
    axios
      .post('http://localhost:4000/api/subscription/airtime/addplan', data)
      .then(() => {
        alert('Airtime added successfully!');
        handleOpenModal();
      })
      .catch((error) => {
        console.log(error);
        alert('An error occurred, please try again.');
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !network) {
      setError('All fields are required');
      return;
    }
    const data = {
      amount,
      network,
    };
    if (val) {
      editPlan(data);
    } else {
      createPlan(data);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={val ? handleOpenEditModal : handleOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {subTitle}
          </Typography>
          <br />
          {error && <Typography color="error">{error}</Typography>}
          <TextField id="Network" label="Network" value={network} onChange={(e) => setNetwork(e.target.value)} />
          <br />
          <br />
          <TextField id="amount" label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <br />
          <br />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default AirtimeModal;
