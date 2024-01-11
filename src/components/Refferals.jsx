import React from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';

const Referral = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Join Our Referral Program
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: 3 }}>
          Earn $150 for every successful property owner referral!
        </Typography>
        <Button variant="contained" fullWidth>
          Sign Up Now
        </Button>
      </Paper>
    </Container>
  );
};

export default Referral;
