import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const Cart = () => {
  return (
    //  Paper is to implement dark/Light mode
    <div>
      <Paper style={{ height: '100vh' }}>
        <Typography variant="h3">My Cart </Typography>
      </Paper>
    </div>
  );
};

export default Cart;
