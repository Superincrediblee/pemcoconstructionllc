'use client';
import React from 'react';
import { Box, Container, Typography, Link, styled } from '@mui/material';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  padding: theme.spacing(2, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = 'Pemco Construction LLC';

  return (
    <FooterWrapper component="footer">
      <FooterContent maxWidth="lg">
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
          © {currentYear} {companyName}. All rights reserved.
        </Typography>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
