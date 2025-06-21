'use client';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Remonty kompleksowe',
    description: 'Pełny zakres prac remontowych od A do Z',
  },
  {
    title: 'Wykończenia wnętrz',
    description: 'Profesjonalne wykończenie nowych mieszkań',
  },
  {
    title: 'Prace malarskie',
    description: 'Malowanie ścian, sufitów i innych powierzchni',
  },
  {
    title: 'Układanie glazury',
    description: 'Montaż płytek ściennych i podłogowych',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  return (
    <Box sx={{ py: 4, overflow: 'hidden' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            Nasze usługi
          </Typography>
        </motion.div>
        <Grid
          container
          spacing={3}
          sx={{ mt: 2 }}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={service.title}
              component={motion.div}
              variants={itemVariants}
            >
              <Card
                sx={{
                  height: '100%',
                  transition:
                    'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => theme.shadows[8],
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h4" component="h4">
                    {service.title}
                  </Typography>
                  <Typography variant="body1">{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
