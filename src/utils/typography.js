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
      name: 'Lato',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Copse', 'serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
})

export default typography
export const rhythm = typography.rhythm
