// components/ServicesSection.js
'use client';

import { Box, Card, CardContent, Typography } from '@mui/material';
import { FaWrench, FaLightbulb, FaSnowflake } from 'react-icons/fa';
import { MdPlumbing } from 'react-icons/md';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
/*  */
const ServiceCard = ({ title, icon, description, bgColor }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }} // Ensure animation only runs once when in view
    transition={{ duration: 0.5 }}
    variants={cardVariants}
  >
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: bgColor,
        borderRadius: '16px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
        color: 'white',
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ mt: 1.5, textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const services = [
  {
    title: 'Handyman Services',
    icon: <FaWrench size={40} />,
    description: 'Professional handyman services for all your home repairs.',
    /*  bgColor: '#007BFF', */
    bgColor: '#FFC107',
  },
  {
    title: 'Electrical Services',
    icon: <FaLightbulb size={40} />,
    description: 'Expert electrical services to keep your home powered.',
    bgColor: '#FFC107',
  },
  {
    title: 'Plumbing Services',
    icon: <MdPlumbing size={40} />,
    description: 'Reliable plumbing services for your home and business.',
    /*     bgColor: '#28A745', */
    bgColor: '#FFC107',
  },
  {
    title: 'Refrigeration Services',
    icon: <FaSnowflake size={40} />,
    description: 'Top-notch refrigeration services for all your cooling needs.',
    /* bgColor: 'grey', */
    bgColor: '#FFC107',
  },
];

const ServicesSection = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 4,
      p: 2,
    }}
  >
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        title={service.title}
        icon={service.icon}
        description={service.description}
        bgColor={service.bgColor}
      />
    ))}
  </Box>
);

export default ServicesSection;
