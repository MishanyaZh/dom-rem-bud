'use client';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';

export default function ServicesSection() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Nasze usługi
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h3" component="h3">
                  Remonty kompleksowe
                </Typography>
                <Typography variant="body1">
                  Pełny zakres prac remontowych od A do Z
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h3" component="h3">
                  Wykończenia wnętrz
                </Typography>
                <Typography variant="body1">
                  Profesjonalne wykończenie nowych mieszkań
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h3" component="h3">
                  Prace malarskie
                </Typography>
                <Typography variant="body1">
                  Malowanie ścian, sufitów i innych powierzchni
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h3" component="h3">
                  Układanie glazury
                </Typography>
                <Typography variant="body1">
                  Montaż płytek ściennych i podłogowych
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
