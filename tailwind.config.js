module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      'starbuck' : '#3E3F48',
      'search' : '#F2F2F3',
      'white': '#ffffff',
      'primary' : '#00C614',
      'neutral' : '#6B6C72',
      'neutral-2' : '#E5E5E6',
      'warning' : '#FDF4ED',
      'success' : '#44C776',
      'progress' : '#F58A28',
      'error' : '#F52828',
      'page' : '#B2B2B6',
      'pageText' : '#88898E'
      

    },
    
    extend: {
      fontFamily : {
        'inter' : 'Inter'
      },
      screens: {
        'sm': '360px',
        
      },
    },
  },
  plugins: [],
}
