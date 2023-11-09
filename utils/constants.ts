import { Size } from 'components/system/Window/RndWindow/useResizable';
import { Position } from 'react-rnd';
import type { ThemeName } from 'styles/themes';

export const DEFAULT_LOCALE = 'en';

export const DEFAULT_THEME: ThemeName = 'defaultTheme';

export const DEFAULT_WINDOW_POSITION: Position = {
  x: 0,
  y: 0
};

export const DEFAULT_WINDOW_SIZE: Size = {
  height: '350px',
  width: '350px'
};

export const FOCUSABLE_ELEMENT = { tabIndex: -1 };

export const PACKAGE_DATA = {
  alias: 'de_wpage',
  author: {
    email: 'ldmc.dvl@gmail.com',
    name: 'Sylbird',
    repository: 'https://github.com/Sylbird/de_wpage.git'
  },
  description: 'Fake Desktop Environment',
  license: 'MIT, ISC',
  version: '1.0.0'
};

export const PREVENT_SCROLL = { preventScroll: true };

export const PROCESS_DELIMITER = '__';

export const MILLISECONDS_IN_SECOND = 1000;

export const SESSION_FILE = '/session.json';

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
