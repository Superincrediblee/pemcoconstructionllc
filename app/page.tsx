import { Box, Typography } from '@mui/material';
/* import { LampDemo } from '@/components/ui/lamp'; */
import ServicesSection from '@/components/ServiceSection';
import WhyChooseUs from '@/components/Rating';
import { ImagesSlide } from '@/components/Carousel';
import { HeroScroll } from '@/components/Scroll';
export default function Home() {
  return (
    <Box>
      <ImagesSlide />

      <Box>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            display: 'grid',
            placeItems: 'center',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 700,
            color: '#333',
            mt: 2,
            mb: 2,
          }}
        >
          Services
        </Typography>
        <ServicesSection />
        <WhyChooseUs />
        <HeroScroll />
      </Box>
    </Box>
  );
}
