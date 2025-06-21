'use client';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';

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

export default function ServicesSection() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Nasze usługi
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
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
