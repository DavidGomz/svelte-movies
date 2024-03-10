/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  theme: {
    extend: {
        gridTemplateColumns: {
            // Simple 16 column grid
            'autofit': 'repeat(auto-fit, minmax(250px, 1fr))',
        },
        height: {
            md: '60vh',
        }
    },
  },
  plugins: [],
}

