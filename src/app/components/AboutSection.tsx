'use client';

import { Container, Typography, Box } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ py: 4, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom>
          O nas
        </Typography>
        <Typography variant="body1" paragraph>
          Dom Rem-Bud to firma z wieloletnim doświadczeniem na rynku
          remontowo-budowlanym. Specjalizujemy się w kompleksowych remontach
          mieszkań oraz wykończeniach wnętrz na terenie Gorzowa Wielkopolskiego
          i okolic.
        </Typography>
        <Typography variant="body1">
          Nasze usługi wykonujemy solidnie, terminowo i w konkurencyjnych
          cenach. Zapewniamy doradztwo techniczne oraz pomoc w doborze
          materiałów.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
