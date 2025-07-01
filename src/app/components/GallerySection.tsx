'use client';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

interface GallerySectionProps {
  images: { src: string; alt?: string }[];
}

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

export default function GallerySection({ images }: GallerySectionProps) {
  return (
    <Box id="gallery" sx={{ py: 4, overflow: 'hidden' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="left">
            Galeria
          </Typography>
        </motion.div>
        <Grid
          container
          spacing={2}
          sx={{ mt: 2 }}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map((img, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              component={motion.div}
              variants={itemVariants}
            >
              <Card
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardMedia
                  component="img"
                  src={img.src}
                  alt={img.alt || 'Zdjęcie'}
                  sx={{ height: 200, objectFit: 'cover' }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
