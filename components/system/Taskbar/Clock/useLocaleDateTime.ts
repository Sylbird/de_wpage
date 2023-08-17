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
  const numericDate = new Intl.DateTimeFormat(
    locale,
    formats.numericDate
  ).format(now);
  const date = new Intl.DateTimeFormat(locale, formats.date).format(now);
  const time = new Intl.DateTimeFormat(locale, formats.time).format(now);

  return {
    numericDate,
    date,
    time
  };
};

export default useLocaleDateTime;
