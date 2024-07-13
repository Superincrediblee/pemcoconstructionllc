'use client';
import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';

const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideIn = {
  hidden: { x: -100 },
  visible: { x: 0, transition: springTransition },
};

const scaleIn = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: springTransition },
};

export default function ContactUs() {
  return (
    <Box
      sx={{
        backgroundColor: 'whitesmoke',
        py: 8,
      }}
    >
      <Container>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'DM Serif Display',
              color: '#333',
              mb: 4,
              textAlign: 'center',
            }}
          >
            Contact Us
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" animate="visible" variants={slideIn}>
              <Box
                sx={{
                  backgroundColor: 'white',
                  p: 4,
                  borderRadius: 2,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'DM Serif Display', mb: 2 }}
                >
                  Our Address
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  1700 Northside Dr, NW Suite A7
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Atlanta, GA, 30318, USA
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideIn}
              custom={1}
            >
              <Box
                sx={{
                  backgroundColor: 'white',
                  p: 4,
                  borderRadius: 2,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'DM Serif Display', mb: 2 }}
                >
                  Call Us
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Phone: +4705796947
                </Typography>
                <Typography variant="body1">
                  Email: pemcoconstructionllc@yahoo.com
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div initial="hidden" animate="visible" variants={scaleIn}>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <a href="tel:+4705796947">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Get in Touch
              </button>
            </a>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
