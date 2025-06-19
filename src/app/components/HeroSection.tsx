'use client';
import { Container, Typography, Button, Paper } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

interface HeroSectionProps {
  openContactDialog: () => void;
}

export default function HeroSection({ openContactDialog }: HeroSectionProps) {
  return (
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
          sx={{ mt: 2, px: 3, py: 1, borderRadius: 2 }}
          onClick={openContactDialog}
          startIcon={<ContactsIcon />}
        >
          Skontaktuj się z nami
        </Button>
      </Container>
    </Paper>
  );
}
