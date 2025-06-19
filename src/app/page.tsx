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
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  Fab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import ContactsIcon from '@mui/icons-material/Contacts';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, useState, ReactElement, Ref } from 'react';

const SlideTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openContactDialog = () => setDialogOpen(true);
  const closeContactDialog = () => setDialogOpen(false);

  const contactData = {
    phone: '+48 668 633 797',
    email: 'rembud.gorzow@gmail.com',
    facebook: 'https://www.facebook.com/Dom.Rem.Bud.Gorzow.Wlkp',
    address: '66-400, Gorzów Wielkopolski',
  };

  const renderContactItem = (
    icon: ReactElement,
    primary: string,
    secondary?: string | ReactElement,
  ) => (
    <ListItem alignItems="flex-start">
      <ListItemIcon sx={{ minWidth: 40 }}>{icon}</ListItemIcon>
      <ListItemText
        primary={primary}
        secondary={secondary}
        primaryTypographyProps={{ fontWeight: 'bold' }}
      />
    </ListItem>
  );

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
            sx={{ mt: 2, px: 3, py: 1, borderRadius: 2 }}
            onClick={openContactDialog}
            startIcon={<ContactsIcon />}
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

      <Box sx={{ py: 6, position: 'relative' }}>
        <Container>
          <Typography variant="h2" component="h2" gutterBottom>
            Kontakt
          </Typography>

          <List
            sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}
          >
            {renderContactItem(
              <PhoneIcon color="primary" />,
              'Telefon',
              <Button
                variant="text"
                href={`tel:${contactData.phone.replace(/\s/g, '')}`}
                sx={{ p: 0, textTransform: 'none', fontWeight: 'normal' }}
              >
                {contactData.phone}
              </Button>,
            )}
            <Divider variant="inset" component="li" />

            {renderContactItem(
              <EmailIcon color="primary" />,
              'Email',
              <Button
                variant="text"
                href={`mailto:${contactData.email}`}
                sx={{ p: 0, textTransform: 'none', fontWeight: 'normal' }}
              >
                {contactData.email}
              </Button>,
            )}
            <Divider variant="inset" component="li" />

            {renderContactItem(
              <FacebookIcon color="primary" />,
              'Facebook',
              <Button
                variant="text"
                href={contactData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: 0, textTransform: 'none', fontWeight: 'normal' }}
              >
                Dom.Rem.Bud.Gorzow.Wlkp
              </Button>,
            )}
            <Divider variant="inset" component="li" />

            {renderContactItem(
              <LocationOnIcon color="primary" />,
              'Adres',
              contactData.address,
            )}
          </List>

          <Fab
            color="primary"
            aria-label="contact"
            sx={{ position: 'fixed', bottom: 20, right: 20 }}
            onClick={openContactDialog}
          >
            <ContactsIcon />
          </Fab>
        </Container>
      </Box>

      <Dialog
        open={dialogOpen}
        TransitionComponent={SlideTransition}
        keepMounted
        onClose={closeContactDialog}
        aria-labelledby="contact-dialog-title"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle
          id="contact-dialog-title"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: 'primary.main',
            color: 'white',
          }}
        >
          <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
            <ContactsIcon sx={{ mr: 1 }} /> Skontaktuj się z nami
          </Box>
          <Fab
            size="small"
            color="inherit"
            onClick={closeContactDialog}
            sx={{ minWidth: 'unset', width: 32, height: 32 }}
          >
            <CloseIcon fontSize="small" />
          </Fab>
        </DialogTitle>

        <DialogContent dividers>
          <List sx={{ p: 0 }}>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    href={`tel:${contactData.phone.replace(/\s/g, '')}`}
                    sx={{ textAlign: 'left', justifyContent: 'flex-start' }}
                    startIcon={<PhoneIcon />}
                  >
                    {contactData.phone}
                  </Button>
                }
              />
            </ListItem>

            <ListItem sx={{ mt: 2 }}>
              <ListItemIcon>
                <EmailIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    href={`mailto:${contactData.email}`}
                    sx={{ textAlign: 'left', justifyContent: 'flex-start' }}
                    startIcon={<EmailIcon />}
                  >
                    {contactData.email}
                  </Button>
                }
              />
            </ListItem>

            <ListItem sx={{ mt: 2 }}>
              <ListItemIcon>
                <FacebookIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    href={contactData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textAlign: 'left', justifyContent: 'flex-start' }}
                    startIcon={<FacebookIcon />}
                  >
                    Zobacz nasz profil
                  </Button>
                }
              />
            </ListItem>

            <ListItem sx={{ mt: 2 }}>
              <ListItemIcon>
                <LocationOnIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Adres" secondary={contactData.address} />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
