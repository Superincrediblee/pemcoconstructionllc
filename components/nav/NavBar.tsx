'use client';
import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { MdAttachEmail } from 'react-icons/md';
import { MdAddCall } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import BackToTop from '@/components/BackToTop';
import { MdKeyboardArrowUp } from 'react-icons/md';
import Fade from '@mui/material/Fade';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { motion, AnimatePresence } from 'framer-motion';
interface NavItem {
  text: string;
  Link: string;
}
interface LinkStyle {
  style: {
    textDecoration?: string;
    color?: string;
    ':hover'?: {
      textDecoration?: string;
    }; // Add properties for other states (focus, active, etc.)
  };
}

interface MenuStyle {
  style: {
    color?: string;
    boxShadow?: string;
    ':hover'?: {
      boxShadow?: string;
    };
  };
}
const navItems: NavItem[] = [
  { text: 'Home', Link: '/' },
  { text: 'About Us', Link: 'about' },
  { text: 'Services', Link: 'services' },
  { text: 'Contact Us', Link: 'contact' },
];

const buttonStyle: React.CSSProperties = {
  borderRadius: '16px',
  /*   boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)', */
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const burgerStyle: React.CSSProperties = {
  width: '100%',
  position: 'relative',
  height: '1px',
};

const burgerLineStyle: React.CSSProperties = {
  height: '4px',
  width: '60%',
  backgroundColor: 'black',
  position: 'absolute',
  left: '30%',
  transition: 'transform 0.3s',
};

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  /*   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); */
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);
  const router = useRouter();
  const linkStyle: LinkStyle = {
    style: {
      textDecoration: 'none',
      color: 'inherit',
      ':hover': {
        textDecoration: 'underline', // Or your desired hover style
      },
    },
  };
  const menuStyle: MenuStyle = {
    style: {
      color: 'white',
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0)',
      ':hover': {
        boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  };

  const handleClick = (index: number): void => {
    setActiveIndex(index);
    const link = navItems[index].Link;
    router.push(`/${link}`);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDelayedDrawerClose = () => {
    setTimeout(() => {
      handleDrawerClose();
    }, 1000); // 0.5 seconds delay
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          top: 'auto',
          bgcolor: 'black',
          display: { xs: 'none', md: 'flex' },
        }}
        elevation={0}
      >
        <Toolbar disableGutters={true} variant="dense">
          <Box sx={{ display: 'flex', margin: 'auto', gap: 4 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <MdOutlineMarkEmailUnread
                style={{
                  color: 'orange',
                  width: 18,
                  height: 18,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Jost',
                  textDecoration: 'none',
                  color: 'white', // Inherit text color
                  '&:hover': {
                    textDecoration: 'none', // Remove underline on hover
                  },
                }}
                component="a"
                href="malto:pemcoconstructionllc@yahoo.com"
              >
                {' '}
                pemcoconstructionllc@yahoo.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <FaPhoneVolume
                style={{
                  color: 'orange',
                  width: 18,
                  height: 18,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Jost',
                  textDecoration: 'none',
                  color: 'white', // Inherit text color
                  '&:hover': {
                    textDecoration: 'none', // Remove underline on hover
                  },
                }}
                component="a"
                href="tel:+4707058015"
              >
                24/7 Customer care
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar position="sticky" sx={{ bgcolor: 'white' }} elevation={2}>
        <Toolbar>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Image src={'/pemconew.png'} alt="" width={60} height={60} />
          </Box>
          {/* For Mobile */}
          <Box
            sx={{ display: { xs: 'flex', md: 'none' }, cursor: 'pointer' }}
            onClick={() => router.push('/')}
          >
            <Image
              src="/pemconew.png"
              alt=""
              width={60}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Box
            sx={{
              marginLeft: 'auto',
              gap: 4,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {navItems.map((item, index) => (
              <Link
                key={item.text}
                href={`/${item.Link}`}
                style={linkStyle.style}
              >
                <Typography
                  sx={{
                    fontSize: '19px',
                    fontFamily: 'DM Serif Display',

                    borderRadius: 5,
                    color: activeIndex === index ? '#ffc400' : 'black', // Active color
                    transition: 'all 0.2s ease-in-out', // Smooth transition
                    '&:hover': {
                      // Hover style for non-active buttons
                      color: activeIndex === index ? '#ffc400' : 'black',
                    },
                  }}
                  onClick={() => handleClick(index)}
                >
                  {item.text}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton onClick={handleDrawerOpen} style={buttonStyle}>
              <motion.div style={burgerStyle}>
                {!open && (
                  <motion.span
                    style={{
                      ...burgerLineStyle,
                      top: open ? '25%' : 'calc(50% - 5px)',
                    }}
                    animate={{
                      transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  />
                )}

                <motion.span
                  style={{
                    ...burgerLineStyle,
                    bottom: open ? '50%' : 'calc(50% - 5px)',
                  }}
                  animate={{
                    transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                />
                <motion.span
                  style={{
                    ...burgerLineStyle,
                    bottom: open ? '50%' : 'calc(50% - 5px)',
                  }}
                  animate={{
                    transform: open ? 'rotate(-45deg)' : 'rotate(0deg)',
                  }}
                />

                <motion.span
                  style={{
                    ...burgerLineStyle,
                    bottom: open ? '50%' : 'calc(50% - 5px)',
                  }}
                  animate={{
                    transform: open ? 'rotate(-45deg)' : 'rotate(0deg)',
                  }}
                />
              </motion.div>
            </IconButton>
          </Box>
        </Toolbar>
        {/*    <Drawer
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
          PaperProps={{
            sx: {
              width: '250px',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(10px)',
            },
          }}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setActiveIndex(index)}
                    onHoverEnd={() => setActiveIndex(null)}
                  >
                    <Link href={item.Link}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ position: 'relative' }}
                      >
                        <ListItemText
                          primary={item.text}
                          sx={{
                            color: 'white',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            margin: '1rem 0',
                            textAlign: 'center',
                            textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                          }}
                          onClick={() => handleClick(index)}
                        />
                        <AnimatePresence>
                          {activeIndex === index && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              exit={{ scaleX: 0 }}
                              transition={{ duration: 0.2 }}
                              style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '2px',
                                background:
                                  'linear-gradient(90deg, yellow 0%, orange 100%)',
                                transformOrigin: 'left',
                              }}
                            />
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </Drawer> */}
        <Drawer
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
          PaperProps={{
            sx: {
              width: '250px',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(10px)',
            },
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                textAlign: 'center',
                padding: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              Pemco Construction LLC
            </Typography>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{
                    width: '100%',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onClick={handleDelayedDrawerClose}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ delay: index * 0.1 }}
                      onHoverStart={() => setActiveIndex(index)}
                      onHoverEnd={() => setActiveIndex(null)}
                    >
                      <Link href={item.Link}>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          style={{ position: 'relative' }}
                        >
                          <ListItemText
                            primary={item.text}
                            sx={{
                              color: 'white',
                              fontSize: '2rem',
                              fontWeight: 'bold',
                              margin: '1rem 0',
                              textAlign: 'center',
                              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                            }}
                            onClick={() => handleClick(index)}
                          />
                          <AnimatePresence>
                            {activeIndex === index && (
                              <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                exit={{ scaleX: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{
                                  position: 'absolute',
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                  height: '2px',
                                  background:
                                    'linear-gradient(90deg, yellow 0%, orange 100%)',
                                  transformOrigin: 'left',
                                }}
                              />
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <a
                href="tel:+4707058015"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  marginRight: '1rem',
                }}
              >
                <MdAddCall style={{ fontSize: '19px' }} />
              </a>
              <a
                href="mailto:pemcoconstructionllc@yahoo.com"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                <MdAttachEmail style={{ fontSize: '19px' }} />
              </a>
            </Box>
          </Box>
        </Drawer>
      </AppBar>
      <Box id="back-to-top-anchor">
        <BackToTop>
          <Fab
            sx={{ bgcolor: 'orange' }}
            size="small"
            aria-label="scroll back to top"
          >
            <MdKeyboardArrowUp size={25} />
          </Fab>
        </BackToTop>
      </Box>
    </Box>
  );
}
