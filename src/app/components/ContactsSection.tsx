'use client';

import {
  Typography,
  Box,
  List,
  Button,
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ReactElement } from 'react';
import { contactData } from '@/utils/contactData';

const ContactsSection = () => {
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
        primaryTypographyProps={{
          fontWeight: 'bold',
          textTransform: 'none',
        }}
      />
    </ListItem>
  );

  return (
    <Box sx={{ py: 4, position: 'relative' }}>
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
      </Container>
    </Box>
  );
};

export default ContactsSection;
