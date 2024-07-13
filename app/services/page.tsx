'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  MdBuild,
  MdFlashOn,
  MdSecurity,
  MdOpacity,
  MdHomeRepairService,
} from 'react-icons/md';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
const ServicesList = () => {
  const services = [
    {
      title: 'Electrical Services',
      items: [
        {
          name: 'Preventative Care',
          description:
            'Regular electrical maintenance keeps your business running smoothly, minimizing downtime and disruptions.',
        },
        {
          name: 'Lighting Efficiency',
          description:
            'We upgrade your lighting to energy-efficient solutions, saving you money and minimizing your environmental impact.',
        },
        {
          name: 'Expert Problem-Solving',
          description:
            'Our electricians expertly diagnose and repair electrical issues, ensuring a safe and functional workspace.',
        },
        {
          name: 'Future-Proofing',
          description:
            'Panel upgrades ensure your electrical system can handle your growing business needs.',
        },
        {
          name: 'Safety First',
          description:
            'Comprehensive safety inspections identify and address potential hazards before they become problems.',
        },
      ],
      icon: <MdFlashOn size={48} />,
      bg: 'white', // Orange background
      textColor: 'black', // Dark text color
    },
    {
      title: 'Plumbing Services',
      items: [
        {
          name: 'Leak Detection & Repair',
          description:
            'We stop leaks fast, minimizing water damage and saving you money.',
        },
        {
          name: 'Water Heater Solutions',
          description:
            'Our experts handle water heater installation, repair, and maintenance, ensuring a reliable hot water supply.',
        },
        {
          name: 'Water Treatment',
          description:
            'We install and service water softeners, providing cleaner and healthier water for your entire business.',
        },
        {
          name: 'Clogged Drain Solutions',
          description:
            'Our technicians tackle tough clogs quickly and efficiently, keeping your drains flowing freely.',
        },
        {
          name: 'Toilet Experts',
          description:
            'From repairs to replacements, we ensure your toilets function smoothly and efficiently.',
        },
      ],
      icon: <MdOpacity size={48} />,
      bg: 'black', // Indigo background
      textColor: '#FFFFFF', // White text color
    },
    {
      title: 'Handyman Services',
      items: [
        {
          name: 'Furniture Assembly',
          description: 'Effortless setup for your new furniture.',
        },
        {
          name: 'Drywall Repair & Painting',
          description: 'Flawless finish for your walls.',
        },
        {
          name: 'Door & Window Repair',
          description: 'Security and weatherproofing for your premises.',
        },
        {
          name: 'Tile Installation & Repair',
          description: 'Tiled perfection for your floors and walls.',
        },
        {
          name: 'Flooring Installation & Repair',
          description: 'Refresh your space with new flooring.',
        },
        {
          name: 'Appliance Installation & Repair',
          description:
            'Experts for installation and repair of all appliance brands.',
        },
        {
          name: 'More Services',
          description: 'We handle it all! Just ask us.',
        },
      ],
      icon: <MdBuild size={48} />,
      bg: 'white', // Orange background
      textColor: 'black', // Dark text color
    },
    {
      title: 'Refrigeration Services',
      items: [
        {
          name: 'Installation and Repair',
          description: 'Expert Handling',
        },
        {
          name: 'Maintenance Check-ups',
          description: 'Keep it Running Smoothly',
        },
        {
          name: 'Temperature Calibration',
          description: 'Optimal Cooling',
        },
        {
          name: 'Seal Repacement',
          description: 'Efficient Energy Use',
        },
        {
          name: 'Emergency Repairs',
          description: 'Prompt Solutions',
        },
        {
          name: 'Appliance Installation & Repair',
          description:
            'Experts for installation and repair of all appliance brands.',
        },
      ],
      icon: <CgSmartHomeRefrigerator size={48} />,
      bg: 'black', // Indigo background
      textColor: '#FFFFFF', // White text color
    },
  ];

  return (
    <Box>
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Box sx={{ backgroundColor: service.bg, py: 6, px: 4 }}>
            <Container maxWidth="lg">
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={2}>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Box sx={{ textAlign: 'center', color: service.textColor }}>
                      {service.icon}
                    </Box>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{ color: service.textColor, mb: 3 }}
                  >
                    {service.title}
                  </Typography>
                  {service.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Box sx={{ color: service.textColor, mb: 2 }}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {item.name}
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.9 }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Grid>
              </Grid>
            </Container>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default ServicesList;
