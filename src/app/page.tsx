'use client';

import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Paper,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Home() {
  return (
    <Box>
      <Paper
        elevation={0}
        square
        sx={{
          bgcolor: 'background.default',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" component="h2" gutterBottom>
            Kompleksowe remonty mieszkań w Gorzowie Wielkopolskim
          </Typography>
          <Typography variant="h5" paragraph>
            Profesjonalne wykończenia wnętrz, remonty i modernizacje
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Skontaktuj się z nami
          </Button>
        </Container>
      </Paper>

      <Box sx={{ py: 6 }}>
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

      <Box sx={{ py: 6, bgcolor: 'background.default' }}>
        <Container>
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
        </Container>
      </Box>

      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h2" component="h2" gutterBottom>
            Kontakt
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body1">
              <strong>Telefon:</strong> +48 123 456 789
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body1">
              <strong>Email:</strong> kontakt@dom-rem-bud.pl
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body1">
              <strong>Adres:</strong> ul. Przykładowa 10, 66-400 Gorzów
              Wielkopolski
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
