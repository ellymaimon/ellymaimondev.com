import Typography from 'typography'

const typography = new Typography({
  title: 'Royale with Cheese',
  baseFontSize: '18px',
  scaleRatio: 2.8,
  googleFonts: [
    {
      name: 'Copse',
      styles: ['400'],
    },
    {
      name: 'Roboto Condensed',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Copse', 'serif'],
  headerWeight: 'normal',
  bodyFontFamily: ['Roboto Condensed', 'sans-serif'],
  blockMarginBottom: '1em',
})

export default typography
export const rhythm = typography.rhythm
