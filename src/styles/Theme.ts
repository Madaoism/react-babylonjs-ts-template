import { 
  loadTheme, 
} from '@uifabric/styling'
import { initializeIcons } from '@uifabric/icons'

export const palette = {
  bodyBackground: '#e3e5e1',  
  bodyStandoutBackground: '#efefef',
  bodyFramebackground: '#d5d3d5',
  bodyText: '#2a2b2c',
  disabledBodyText: '#6c6d6a',

  buttonText: '#1d1e1f',
  buttonPrimary: '#3fa73e',
  buttonPrimaryHovered: '#2f972e',
  buttonSecondary: '#8a9dae',
  buttonSecondaryHovered: '#6a7d9e',
}

export const semanticColors = {
  bodyBackground: 'var(--bodyBackground)',
  bodyStandoutBackground: 'var(--bodyStandoutBackground)',
  bodyFrameBackground: 'var(--bodyFrameBackground)',
  bodyText: 'var(--bodyText)',
  disabledBodyText: 'var(--disabledBodyText)',
}

export const effects = {
  roundedCorner2: '2'
};

export const fonts = {
  xSmall: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 10,
    fontWeight: 300,
  },
  small: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 12,
    fontWeight: 300,
  },
  smallPlus: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 12,
    fontWeight: 300,
  },
  medium: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 14,
    fontWeight: 300,
  },
  mediumPlus: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 14,
    fontWeight: 400,
  },
  large: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 14,
    fontWeight: 700,
  },
  xLarge: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 16,
    fontWeight: 300,
  },
  xLargePlus: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 16,
    fontWeight: 400
  },
  xxLarge: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 16,
    fontWeight: 700
  },
  xxLargePlus: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 18,
    fontWeight: 300
  },
  superLarge: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 18,
    fontWeight: 400
  },
  mega: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 18,
    fontWeight: 700
  }
}

export const initTheme = (): void => {
  loadTheme({
    // @ts-ignore
    palette,
    semanticColors,
    // @ts-ignore
    fonts,
    effects,
  });

  initializeIcons();
}