'use client';

import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <Box sx={{ py: 4, bgcolor: 'background.default', overflow: 'hidden' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h2" gutterBottom>
            O nas
          </Typography>
          <Typography variant="body1" paragraph>
            Dom Rem-Bud to firma z wieloletnim doświadczeniem na rynku
            remontowo-budowlanym. Specjalizujemy się w kompleksowych remontach
            mieszkań oraz wykończeniach wnętrz na terenie Gorzowa
            Wielkopolskiego i okolic.
          </Typography>
          <Typography variant="body1">
            Nasze usługi wykonujemy solidnie, terminowo i w konkurencyjnych
            cenach. Zapewniamy doradztwo techniczne oraz pomoc w doborze
            materiałów.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
