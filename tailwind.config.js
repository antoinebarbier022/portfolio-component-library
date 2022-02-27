module.exports = {
  mode: 'jit',
  purge: ["./components/**/*.{js,jsx,ts,tsx}"],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {},
  },
  plugins: [],
}
