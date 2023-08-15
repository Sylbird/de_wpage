import { useTheme } from 'styled-components';
import { DEFAULT_LOCALE } from 'utils/constants';

type LocaleDateTime = {
  numericDate: string;
  date: string;
  time: string;
};

const useLocaleDateTime = (now: Date): LocaleDateTime => {
  const locale = DEFAULT_LOCALE;
  const { formats } = useTheme();

  return {
    numericDate: new Intl.DateTimeFormat(locale, formats.numericDate).format(
      now
    ),
    date: new Intl.DateTimeFormat(locale, formats.date).format(now),
    time: new Intl.DateTimeFormat(locale, formats.time).format(now)
  };
};

export default useLocaleDateTime;
