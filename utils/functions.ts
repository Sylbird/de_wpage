import { extname } from 'path';

export const bufferToUrl = (buffer: Buffer): string =>
  URL.createObjectURL(new Blob([new Uint8Array(buffer)]));

export const cleanUpBufferUrl = (url: string): void => URL.revokeObjectURL(url);

export const haltEvent = (
  event:
    | Event
    | React.DragEvent
    | React.FocusEvent
    | React.KeyboardEvent
    | React.MouseEvent
): void => {
  try {
    if (event.cancelable) {
      event.preventDefault();
      event.stopPropagation();
    }
  } catch {
    // Ignore failured to halt event
  }
};

export const loadScript = (src: string): Promise<Event> =>
  new Promise((resolve, reject) => {
    const loadedScripts = [...document.scripts];

    if (loadedScripts.find((script) => script.src.endsWith(src))) {
      resolve(new Event('Already Loaded.'));
    } else {
      const script = document.createElement('script');

      script.async = false;
      script.src = src;
      script.onerror = (event) => reject(event);
      script.onload = (event) => resolve(event);

      document.head.appendChild(script);
    }
  });

export const loadStyle = (href: string): Promise<Event> =>
  new Promise((resolve, reject) => {
    const loadedLinks = [...document.getElementsByTagName('link')];

    if (loadedLinks.find((link) => link.href.endsWith(href))) {
      resolve(new Event('Already Loaded.'));
    } else {
      const link = document.createElement('link');

      link.rel = 'stylesheet';
      link.href = href;
      link.onerror = (event) => reject(event);
      link.onload = (event) => resolve(event);

      document.head.appendChild(link);
    }
  });

export const loadFiles = async (files: string[]): Promise<Event[]> =>
  Promise.all(
    files.reduce((filesToLoad: Promise<Event>[], file) => {
      const ext = extname(file).toLowerCase();

      if (ext === '.css') filesToLoad.push(loadStyle(file));
      else if (ext === '.js') filesToLoad.push(loadScript(file));

      return filesToLoad;
    }, [])
  );

export const pxToNumber = (value: string): number =>
  Number(value.replace('px', ''));
