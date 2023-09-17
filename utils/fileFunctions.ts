import type { FSModule } from 'browserfs/dist/node/core/FS';
import ini from 'ini';

type Shortcut = {
  BaseURL: string;
  IconFile: string;
  URL: string;
};

export const getIconByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return '/System/Icons/48x48/image.png';
    default:
      return '/System/Icons/48x48/unknown.png';
  }
};
export const getProcessByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return 'V86';
    default:
      return '';
  }
};

export const getShortcut = (path: string, fs: FSModule): Promise<Shortcut> =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (error, contents = Buffer.from('')) => {
      if (error) {
        reject(error);
      } else {
        const { InternetShortcut = { BaseURL: '', IconFile: '', URL: '' } } =
          ini.parse(contents.toString());
        resolve(InternetShortcut as Shortcut);
      }
    });
  });

export const loadScript = (src: string, callback: () => void): void => {
  const script = document.createElement('script');

  script.src = src;
  script.onload = () => callback?.();

  document.head.appendChild(script);
};

export const bufferToUrl = (buffer: Buffer): string =>
  URL.createObjectURL(new Blob([new Uint8Array(buffer)]));
