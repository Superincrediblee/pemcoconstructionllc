'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress, styled, Grid } from '@mui/material';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Custom styled LinearProgress with a gradient color
const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    background:
      'linear-gradient(90deg, rgba(255,165,0,1) 0%, rgba(255,196,0,1) 100%)', // Orange to yellow gradient
  },
}));

const ratings = [
  { label: 'Precision Craft', value: 94 },
  { label: 'Quality Control', value: 95 },
  { label: 'Customer Satisfaction', value: 97 },
  { label: 'Job Completion', value: 99 },
];

const RatingProgress = ({ label, value }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      const increment = () => {
        setProgress((prev) => {
          if (prev < value) {
            return Math.min(prev + 1, value);
          }
          return prev;
        });
      };
      const intervalId = setInterval(increment, 20);
      return () => clearInterval(intervalId);
    }
  }, [inView, value]);

  return (
    <Box ref={ref} sx={{ mb: 4 }}>
      <Typography
        variant="body1"
        sx={{ mb: 1, fontWeight: 'bold', textAlign: 'left' }}
      >
        {label}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <CustomLinearProgress variant="determinate" value={progress} />
        </Box>
        <Typography variant="body2">{progress}%</Typography>
      </Box>
    </Box>
  );
};

const WhyChooseUs = () => (
  <Box sx={{ flexGrow: 1, py: 8 }}>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}
          >
            A Right Choice that Makes the Difference for you
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center' }}>
            Crafting superior spaces with a blend of classic and contemporary
            design. Our meticulous attention to detail and commitment to quality
            ensures a refined and sophisticated result.
          </Typography>
          <Box sx={{ m: 1 }}>
            {ratings.map((rating) => (
              <RatingProgress
                key={rating.label}
                label={rating.label}
                value={rating.value}
              />
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Image
            src="/pemco3.png" // Replace with the actual image filename in your public folder
            alt="Why Choose Us"
            width={1000}
            height={1000}
            style={{ objectFit: 'cover', border: '2px solid black' }}
          />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default WhyChooseUs;
