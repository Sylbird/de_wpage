import { extname } from 'path';
import { ONE_TIME_PASSIVE_EVENT } from 'utils/constants';

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

const loadScript = (
  src: string,
  defer?: boolean,
  force?: boolean,
  asModule?: boolean
): Promise<Event> =>
  new Promise((resolve, reject) => {
    const loadedScripts = [...document.scripts];
    const currentScript = loadedScripts.find((loadedScript) =>
      loadedScript.src.endsWith(src)
    );

    if (currentScript) {
      if (!force) {
        resolve(new Event('Already loaded.'));
        return;
      }

      currentScript.remove();
    }

    const script = document.createElement(
      'script'
    ) as HTMLElementWithPriority<HTMLScriptElement>;

    script.async = false;
    if (defer) script.defer = true;
    if (asModule) script.type = 'module';
    script.fetchPriority = 'high';
    script.src = src;
    script.addEventListener('error', reject, ONE_TIME_PASSIVE_EVENT);
    script.addEventListener('load', resolve, ONE_TIME_PASSIVE_EVENT);

    document.head.append(script);
  });

const loadStyle = (href: string): Promise<Event> =>
  new Promise((resolve, reject) => {
    const loadedStyles = [
      ...document.querySelectorAll('link[rel=stylesheet]')
    ] as HTMLLinkElement[];

    if (loadedStyles.some((loadedStyle) => loadedStyle.href.endsWith(href))) {
      resolve(new Event('Already loaded.'));
      return;
    }

    const link = document.createElement(
      'link'
    ) as HTMLElementWithPriority<HTMLLinkElement>;

    link.rel = 'stylesheet';
    link.fetchPriority = 'high';
    link.href = href;
    link.addEventListener('error', reject, ONE_TIME_PASSIVE_EVENT);
    link.addEventListener('load', resolve, ONE_TIME_PASSIVE_EVENT);

    document.head.append(link);
  });

export const getExtension = (url: string): string => extname(url).toLowerCase();

export const loadFiles = async (
  files?: string[],
  defer?: boolean,
  force?: boolean,
  asModule?: boolean
): Promise<void> =>
  !files || files.length === 0
    ? Promise.resolve()
    : files.reduce(async (_promise, file) => {
        await (getExtension(file) === '.css'
          ? loadStyle(encodeURI(file))
          : loadScript(encodeURI(file), defer, force, asModule));
      }, Promise.resolve());

export const pxToNumber = (value: number | string = 0): number =>
  typeof value === 'number' ? value : Number.parseFloat(value);
