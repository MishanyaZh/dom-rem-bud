'use client';

import AboutSection from './components/AboutSection';
import ContactsSection from './components/ContactsSection';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import { contactData } from '@/utils/contactData';
import CloseIcon from '@mui/icons-material/Close';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactElement, Ref, useState } from 'react';

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

  return (
    <Box>
      <HeroSection openContactDialog={openContactDialog} />
      <ServicesSection />
      <AboutSection />
      <GallerySection
        images={[
          { src: '/images/gallery1.jpg', alt: 'Zdjęcie 1' },
          { src: '/images/gallery2.jpg', alt: 'Zdjęcie 2' },
          { src: '/images/gallery3.jpg', alt: 'Zdjęcie 3' },
          { src: '/images/gallery4.jpg', alt: 'Zdjęcie 4' },
        ]}
      />
      <ContactsSection />

      <Fab
        color="primary"
        aria-label="contact"
        sx={{ position: 'fixed', bottom: 60, right: 20 }}
        onClick={openContactDialog}
      >
        <ContactsIcon />
      </Fab>

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
          <IconButton
            onClick={closeContactDialog}
            color="inherit"
            sx={{ width: 32, height: 32, p: 0 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <List sx={{ p: 0 }}>
            <ListItem sx={{ p: 0, mt: 1 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <PhoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    href={`tel:${contactData.phone.replace(/\s/g, '')}`}
                    sx={{
                      textAlign: 'left',
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                    }}
                    startIcon={<PhoneIcon />}
                  >
                    {contactData.phone}
                  </Button>
                }
              />
            </ListItem>

            <ListItem sx={{ p: 0, mt: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <EmailIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    href={`mailto:${contactData.email}`}
                    sx={{
                      textAlign: 'left',
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                    }}
                    startIcon={<EmailIcon />}
                  >
                    {contactData.email}
                  </Button>
                }
              />
            </ListItem>

            <ListItem sx={{ p: 0, mt: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
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
                    sx={{
                      textAlign: 'left',
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                    }}
                    startIcon={<FacebookIcon />}
                  >
                    Zobacz nasz profil
                  </Button>
                }
              />
            </ListItem>

            <ListItem sx={{ p: 0, mt: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
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
