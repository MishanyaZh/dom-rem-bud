'use client';
import { Container, Typography, Grid, Card, CardMedia } from '@mui/material';

interface GallerySectionProps {
  images: { src: string; alt?: string }[];
}

export default function GallerySection({ images }: GallerySectionProps) {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Galeria
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
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
  );
}
