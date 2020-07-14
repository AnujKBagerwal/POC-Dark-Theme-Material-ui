import React from 'react';
import { Typography, Paper } from '@material-ui/core';

const Trending = () => {
  return (
    // Paper is to implement dark/Light mode
    <div>
      <Paper style={{ height: '100vh' }}>
        <Typography variant="h3">Trending</Typography>
      </Paper>
    </div>
  );
};

export default Trending;
