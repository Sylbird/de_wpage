const colors = {
  fileEntry: {
    background: 'rgba(168, 180, 190, 0.20)',
    backgroundFocused: 'rgba(168, 180, 190, 0.35)',
    activeBar: 'rgb(74, 189, 248)',
    textShadow: `
    0 0 1px rgba(0, 0, 0, 75%),
    0 0 2px rgba(0, 0, 0, 50%),

    0 1px 1px rgba(0, 0, 0, 75%),
    0 1px 2px rgba(0, 0, 0, 50%),

    0 2px 1px rgba(0, 0, 0, 75%),
    0 2px 2px rgba(0, 0, 0, 50%)`,
    inactiveBar: 'rgb(159, 154, 151)'
  },
  primary: 'rgb(0, 112, 243)',
  taskbar: {
    activeHover: 'rgba(159, 154, 151,0.15)',
    background: 'rgba(32, 32, 32, 0.7)',
    entry: {
      active: 'rgba(159, 154, 151,0.1)'
    },
    hover: 'rgba(159, 154, 151,0.1)',
    lowHover: 'rgba(159, 154, 151,0.06)'
  },
  text: 'rgba(255, 255, 255, 0.9)',
  titleBar: {
    backgroundInactive: 'rgba(32, 32, 32, 1)',
    buttonInactive: 'rgb(128, 128, 128)',
    closeHover: 'rgba(200, 15, 30, 1)',
    hover: 'rgba(159, 154, 151,0.1)',
    text: 'rgba(255, 255, 255, 0.9)',
    textInactive: 'rgb(128, 128, 128)'
  },
  window: {
    background: 'rgba(25, 25, 25, 1)',
    outline: '1px solid rgba(63, 64, 67)',
    shadow: '0 0 15px 0 rgba(0, 0, 0, 50%)',
    shadowInactive: '0 0 8px 0 rgba(0, 0, 0, 50%)'
  }
};

export default colors;
