export * from './breakpoints';
export const theme = {
  colors: {
    light: '#FFFFFF',
    primary300: '#FFC107',
    primary400: '#FFB300',
    primary500: '#FF9800',
    secondary300: '#4DD0E1',
    dark600: '#424242',
    dark500: '#616161',
    gray400: '#BDBDBD',
    primaryGradient: 'linear-gradient(45deg, #FFB74D 0%, #FFA726 100%)'
  },
  fonts: {
    body: 'Noto Sans CJK JP, Inter, sans-serif'
  }
};

export type ThemeType = typeof theme;
