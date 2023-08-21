import type { ThemeName } from 'styles/themes';

export const PACKAGE_DATA = {
  alias: 'de_wpage',
  author: {
    email: 'ldmc.dvl@gmail.com',
    name: 'Sylbird',
    repository: 'https://github.com/Sylbird/de_wpage.git'
  },
  description: 'Personal Webpage - Desktop Environment',
  license: 'ISC',
  version: '1.0.0'
};

export const DEFAULT_LOCALE = 'en';

export const DEFAULT_THEME: ThemeName = 'defaultTheme';

export const TIFF_IMAGE_FORMATS = ['.cr2', '.dng', '.nef', '.tif', '.tiff'];

export const IMAGE_FILE_EXTENSIONS = [
  ...TIFF_IMAGE_FORMATS,
  '.ani',
  '.apng',
  '.avif',
  '.bmp',
  '.cur',
  '.gif',
  '.ico',
  '.jfif',
  '.jif',
  '.jpe',
  '.jpeg',
  '.jpg',
  '.jxl',
  '.pjp',
  '.pjpeg',
  '.png',
  '.svg',
  '.qoi',
  '.webp',
  '.xbm'
];

export const MILLISECONDS_IN_SECOND = 1000;
