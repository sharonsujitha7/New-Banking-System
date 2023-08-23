import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DisplaySuccess from './TransferSuccesful';
import { useNavigate } from 'react-router-dom';

export default function Transaction() {
  const navigate = useNavigate();
    const [state, setState] = useState({
        transaction_type: "",
        deb_acc_num: "",
        cred_acc_num: "",
        amount:"",
        transaction_date: ""
      });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        console.log("Displaying success next");
        navigate(<DisplaySuccess ReferenceID={"098765432"} mode={"RTGS"} deb_acc={123456789} cred_acc={234567890} amt={1000} timestamp={10101010} remarks={"Hello"}/>);
      };

    const handleOptionChange = (event) => {
        console.log("Option changed");
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
          }));
    };


    let additionalFields = null;
    let Note = null;
    let mandatoryFields = (
    <div>
        <div className="form-control">
            <label>From Account:</label>
            <input 
                type="int" 
                name="deb_acc_num" 
                defaultValue={state.deb_acc_num}
                onChange={handleInputChange}
                />
        </div>
        <div className="form-control">
            <label>To Account:</label>
            <input
                type="int" 
                name="cred_acc_num" 
                defaultValue={state.cred_acc_num}
                onChange={handleInputChange}
                />
        </div>
        <div className="form-control">
            <label>Amount:</label>
            <input
                type="int" 
                name="amount" 
                defaultValue = {state.amount}
                onChange={handleInputChange}
                />
            <label>Transaction Date:</label>
            <input
                type="text" 
                name="transaction_date" 
                defaultValue = {state.transaction_date}
                onChange={handleInputChange}
                />
        </div>
    </div>
    );
    let remarkField = (
        <div className="form-control">
            <label>Remark</label>
            <input
                type="text" 
                name="remark" 
                defaultValue = {state.remark}
                onChange={handleInputChange}
                />
        </div>
    )
    if (state.transaction_type === 'IMPS') {
      additionalFields = (
        <div>
          <label>Maturity Instructions:</label>
          <input type="text" name="Maturity_Instructions" />
        </div>
      );
    } else if(state.transaction_type==='NEFT'){
        Note = (
            <div>
                <p>Please note:</p>
                <p>1. Transactions will be executed on the next working day if they are scheduled for 
                    undays, National Holidays, NEFT Holidays(as declared by RBI)</p>
                <p>2. Timings for NEFT, Monday-Saturday(except 2nd and 4th Saturday) 6:00 AM-6:30 PM</p>
            </div>
        )
    }
    else if (state.transaction_type === 'RTGS') {
      additionalFields = (
        <div>
          <label>Maturity Instructions:</label>
          <input type="text" name="Maturity_Instructions" />
        </div>
      );
    }

    return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <div>
      <h1>Initiate Payment</h1>
        <label className="form-control">Select the type of payment:</label>
        <select name = "transaction_type" value={state.transaction_type} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="IMPS">IMPS</option>
          <option value="NEFT">NEFT</option>
          <option value="RTGS">RTGS</option>
        </select>
        {mandatoryFields}
        {additionalFields}
        {remarkField}
        {Note}
        <Button
            type="save" // Is this how it is? What are legal types?
            //fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
        >
            Save
        </Button>
        <Button
            //fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
        >
            Reset
        </Button>
        <Button
            //fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
        >
            Save As Template
        </Button>
        <Button
            type="submit" // too sus
            //fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Continue
        </Button>
      </div>
      </Box>
    );
}