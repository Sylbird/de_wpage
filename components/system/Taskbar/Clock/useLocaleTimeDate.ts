import { useTheme } from 'styled-components';
import { DEFAULT_LOCALE } from 'utils/constants';

type LocaleTimeDate = {
  numericDate: string;
  date: string;
  time: string;
};

const useLocaleTimeDate = (now: Date): LocaleTimeDate => {
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

export default useLocaleTimeDate;
