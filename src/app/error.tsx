'use client';

import { Button, Box, Typography, Paper } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        p: 4,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
          maxWidth: 500,
        }}
      >
        <ErrorOutlineIcon color="error" sx={{ fontSize: 60, mb: 2 }} />
        <Typography variant="h4" component="h2" gutterBottom>
          Ups! Coś poszło nie tak.
        </Typography>
        <Typography variant="body1" paragraph>
          Przepraszamy, wystąpił problem podczas ładowania strony.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => reset()}
          sx={{ mt: 2 }}
        >
          Spróbuj ponownie
        </Button>
      </Paper>
    </Box>
  );
}
