'use client';
import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useThemeMode } from './ThemeModeProvider';

export default function ThemeToggleButton() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}
