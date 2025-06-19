'use client';

import { ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeModeProvider from './components/ThemeModeProvider';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeModeProvider>
      <CssBaseline />
      {children}
    </ThemeModeProvider>
  );
}
