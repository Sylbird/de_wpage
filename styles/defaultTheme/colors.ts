const colors = {
  fileEntry: {
    textShadow: `
    0 0 1px rgba(0, 0, 0, 75%),
    0 0 2px rgba(0, 0, 0, 50%),

    0 1px 1px rgba(0, 0, 0, 75%),
    0 1px 2px rgba(0, 0, 0, 50%),

    0 2px 1px rgba(0, 0, 0, 75%),
    0 2px 2px rgba(0, 0, 0, 50%)`
  },
  highlight: '#76b9ed',
  primary: '#0070f3',
  taskbar: {
    background: 'rgba(32, 32, 32, 0.7)',
    hover: 'rgba(159, 154, 151,0.1)',
    lowHover: 'rgba(159, 154, 151,0.06)'
  },
  text: 'rgba(255, 255, 255, 0.9)',
  titlebar: {
    closeHover: 'rgba(200, 15, 30, 1)',
    hover: 'rgba(159, 154, 151,0.1)'
  },
  window: {
    background: '#dddddd'
  }
};

export default colors;
