tailwind.config = {
				  theme: {
				    colors: {
				      transparent: 'transparent',
				      current: 'currentColor',
				      'azul-claro': '#00B4CC',
							'azul-escuro': '#008699',
				      'cinza-escuro': '#343838',
							'cinza-escuro-placeholder': '#757575',
				      'cinza-claro': '#AAAAAA',
				      'branco': '#ffffff',
				      'verde-sucesso': '#00C04D'
				    },
						fontFamily: {
							'poppins': ['Poppins', 'sans-serif'],
							'hind': ['Hind Madurai']
						},
						extend: {
							backgroundImage: {
								'polygon': "url('../assets/images/polygon.svg')",
								'login-image': "linear-gradient(0deg, rgba(0, 0, 0, 0.4) 10%, transparent), url('../assets/images/rio-de-janeiro.jpg')"
							}
						}
				  },
				  variants: {
				    extend: {
				      fill: ['hover'],
				    },
				  },
				}