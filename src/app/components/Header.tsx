'use client';

import { Box, Typography, Container } from '@mui/material';
import ThemeToggleButton from './ThemeToggleButton';
import Navbar from './Navbar';

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: 2,
          paddingBottom: 0,
          gap: 3,
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 24, md: 32 },
              fontWeight: 800,
              letterSpacing: 2,
              color: 'primary.main',
              m: 0,
            }}
          >
            Dom Rem-Bud
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              fontSize: { xs: 14, md: 18 },
            }}
          >
            Profesjonalne wykończenia wnętrz
          </Typography>
        </Box>
        <ThemeToggleButton />
      </Container>
      <Navbar />
    </Box>
  );
}
