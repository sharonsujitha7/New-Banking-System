import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DisplaySuccess({ReferenceID, mode, deb_acc, amt, cred_acc, timestamp, remarks}) {
  const containerStyle = {
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    padding: '1.5rem',
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem',
    marginBottom: '1rem',
    color: 'white',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const valueStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  return (
    <section id="Success">
      <h1>Transfer Successful!</h1>
      <div style={containerStyle}>
        <div style={titleStyle}>Reference ID</div>
        <div style={valueStyle}>{ReferenceID}</div>
      </div>
      <div style={containerStyle}>
        <div style={titleStyle}>Mode</div>
        <div style={valueStyle}>{mode}</div>
      </div>
      <div style={containerStyle}>
        <div style={titleStyle}>Paid to Account</div>
        <div style={valueStyle}>{cred_acc}</div>
      </div>
      <div style={containerStyle}>
        <div style={titleStyle}>Amount</div>
        <div style={valueStyle}>{amt}</div>
      </div>
      <div style={containerStyle}>
        <div style={titleStyle}>From Account</div>
        <div style={valueStyle}>{"xxxxxxxxxxxx"}{(deb_acc % 1000)}</div>
      </div>
      <div style={containerStyle}>
        <div style={titleStyle}>On</div>
        <div style={valueStyle}>{timestamp}</div>
      </div>
      <div style={containerStyle}>
        <div style={titleStyle}>Remarks</div>
        <div style={valueStyle}>{remarks}</div>
      </div>
    </section>
  );
}

export default DisplaySuccess;