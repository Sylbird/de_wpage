const formats = {
  date: {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  } as Intl.DateTimeFormatOptions,
  time: {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  } as Intl.DateTimeFormatOptions,
  systemFont: "'Segoe UI', system-ui, Roboto, 'Helvetica Neue', sans-serif"
};

export default formats;
