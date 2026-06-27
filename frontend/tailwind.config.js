/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'surface-container-low': '#eff4ff',
        'surface-dim': '#cbdbf5',
        error: '#ba1a1a',
        surface: '#f8f9ff',
        'on-tertiary': '#ffffff',
        outline: '#757682',
        'on-background': '#0b1c30',
        'on-secondary-fixed-variant': '#005236',
        'secondary-container': '#6cf8bb',
        'on-primary-fixed': '#00164e',
        'secondary-fixed-dim': '#4edea3',
        background: '#f8f9ff',
        'on-tertiary-container': '#ef9900',
        'surface-container': '#e5eeff',
        'primary-fixed': '#dce1ff',
        secondary: '#006c49',
        'on-primary-fixed-variant': '#264191',
        'surface-container-high': '#dce9ff',
        'outline-variant': '#c5c5d3',
        'inverse-on-surface': '#eaf1ff',
        'on-secondary-fixed': '#002113',
        'secondary-fixed': '#6ffbbe',
        'primary-container': '#1e3a8a',
        'on-secondary-container': '#00714d',
        'on-surface': '#0b1c30',
        'inverse-surface': '#213145',
        'error-container': '#ffdad6',
        'surface-variant': '#d3e4fe',
        'tertiary-fixed': '#ffddb8',
        'on-primary': '#ffffff',
        'on-tertiary-fixed-variant': '#653e00',
        'on-primary-container': '#90a8ff',
        'tertiary-fixed-dim': '#ffb95f',
        'on-surface-variant': '#444651',
        'on-error-container': '#93000a',
        'inverse-primary': '#b6c4ff',
        'primary-fixed-dim': '#b6c4ff',
        tertiary: '#3e2400',
        'surface-container-highest': '#d3e4fe',
        'tertiary-container': '#5c3800',
        'on-secondary': '#ffffff',
        'surface-container-lowest': '#ffffff',
        'on-tertiary-fixed': '#2a1700',
        primary: '#00236f',
        'surface-bright': '#f8f9ff',
        'surface-tint': '#4059aa',
        'on-error': '#ffffff'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        'margin-desktop': '48px',
        'container-max': '1280px',
        base: '8px',
        gutter: '24px',
        'margin-mobile': '20px',
        'stack-md': '24px',
        'stack-lg': '48px',
        'stack-sm': '12px'
      },
      fontFamily: {
        'headline-lg-mobile': ['Public Sans'],
        'body-lg': ['Public Sans'],
        'label-md': ['Public Sans'],
        caption: ['Public Sans'],
        'display-lg': ['Public Sans'],
        'body-md': ['Public Sans'],
        'title-md': ['Public Sans'],
        'headline-lg': ['Public Sans']
      },
      fontSize: {
        'headline-lg-mobile': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'title-md': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }]
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};