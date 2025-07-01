'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { label: 'Nasze usługi', href: '#services' },
  { label: 'O nas', href: '#about' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const id = href.replace('#', '');
    setTimeout(() => scrollToSection(id), 100);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          bgcolor: 'transparent',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'flex-end', minHeight: 56, px: 0 }}>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                sx={{ mr: 2 }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                  sx: {
                    bgcolor: 'background.paper',
                    width: '100vw',
                    height: '100vh',
                    maxWidth: '100vw',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 2001,
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                  <IconButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon fontSize="large" />
                  </IconButton>
                </Box>
                <List>
                  {navLinks.map((link) => (
                    <ListItem key={link.href} disablePadding>
                      <ListItemButton onClick={() => handleNavClick(link.href)}>
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  color="primary"
                  sx={{ fontWeight: 600, fontSize: 16, textTransform: 'none' }}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
