import React from 'react';
import './home.css'
import { Container ,Box, Typography} from '@mui/material';

const Home = () => {
  return (
    <Container sx={{maxWidth:"xl"} }>
        <Box>
          <Typography variant="h2">
              hi it the landing home page
          </Typography>
        </Box>
      </Container>
  );
};

export default Home;
