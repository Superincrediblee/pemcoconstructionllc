'use client';
import { Box, Typography, Button, Link } from '@mui/material';
import { BiError } from 'react-icons/bi';
import styled from '@emotion/styled';
export default function NotFound() {
  const StyledButton = styled(Button)({
    backgroundColor: 'Black',
    '&:hover': {
      backgroundColor: 'grey',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
        p: 8,
      }}
    >
      <BiError style={{ fontSize: 100, color: '#d32f2f' }} />
      <Typography variant="h4" sx={{ mb: 3 }}>
        Oops! This page could not be found.
      </Typography>
      <Typography variant="body1">
        The page you are looking for might have been removed or the URL might be
        incorrect.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <StyledButton variant="contained" href="/">
          Go Back to Home
        </StyledButton>
        <Link href="/contact" underline="none" sx={{ ml: 2 }}>
          <Button variant="text">Contact Us</Button>
        </Link>
      </Box>
    </Box>
  );
}
