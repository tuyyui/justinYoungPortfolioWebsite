module.exports = {
 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   'sans': ['Helvetica'] 
    // },
    extend: {
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out': {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        'fade-in': {
          '100%':
           {
            opacity: '1'
          },
          '0%':
          {
            opacity: '0'
          }
        },
        'background-color-change': 
        {
          '0%': 
          {
            'background-color': 'rgb(255, 255, 255)'
        },
        
        '5%': {
            'background-color': 'rgb(232, 200, 233)'
        },
        
        '10%': {
            'background-color': 'rgb(252, 181, 197)'
        },
        
        '15%': {
            'background-color': 'rgb(244, 59, 184)'
        },
        
        '20%': {
            'background-color': 'rgb(239, 64, 74)'
        },
        
        '25%': {
            'background-color': 'rgb(250, 105, 0)'
        },
        
        '30%': {
            'background-color': 'rgb(247, 148, 30)'
        },
        
        '35%': {
            'background-color': 'rgb(255, 203, 5)'
        },
        
        '40%': {
            'background-color': 'rgb(255, 254, 174)'
        },
        
        '45%': {
            'background-color': 'rgb(200, 211, 131)'
        },
        
        '50%': {
            'background-color': 'rgb(166, 200, 133)'
        },
        
        '55%': {
            'background-color': 'rgb(1, 172, 136)'
        },
        
        '60%': {
            'background-color': 'rgb(0, 127, 121)'
        },
        
        '65%': {
            'background-color': 'rgb(0, 164, 168)'
        },
        
        '70%': {
            'background-color': 'rgb(0, 102, 179)'
        },
        
        '75%': {
            'background-color': 'rgb(0, 142, 209)'
        },
        
        '80%': {
            'background-color': 'rgb(96, 156, 207)'
        },
        
        '85%': {
            'background-color': 'rgb(161, 212, 229)'
        },
        
        '90%': {
            'background-color': 'rgb(176, 184, 193)'
        },
        
       '95%': {
            'background-color': 'rgb(1, 172, 136)'
        },
        
        '100%': {
            'background-color': 'rgb(214, 98, 68)'
        },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out': 'fade-out 1.0s ease-out',
        'fade-in': 'fade-in 1.0s ease-out',
        'background-color-change': 'background-color-change 260s ease infinite',
    }
    },
  },
  plugins: [],
}
