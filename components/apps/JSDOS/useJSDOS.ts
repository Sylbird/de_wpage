import type { DosCI } from 'components/apps/JSDOS/types';
import useTitle from 'components/system/Window/useTitle';
import useWindowSize from 'components/system/Window/useWindowSize';
import { useFileSystem } from 'contexts/fileSystem';
import { useEffect, useState } from 'react';
import { bufferToUrl, cleanUpBufferUrl, loadFiles } from 'utils/functions';
import { globals, libs, pathPrefix } from 'components/apps/JSDOS/config';
import { useProcesses } from 'contexts/process';

const cleanUploader = () =>
  globals.forEach((global) => delete (window as never)[global]);

const useJSDOS = (
  id: string,
  url: string,
  screenRef: React.RefObject<HTMLDivElement | null>
): void => {
  const { appendFileToTitle } = useTitle(id);
  const { updateWindowSize } = useWindowSize(id);
  const [dos, setDos] = useState<DosCI | null>(null);
  const { fs } = useFileSystem();
  const { close } = useProcesses();

  useEffect(() => {
    if (!dos && fs && url) {
      fs.readFile(url, (_error, contents = Buffer.from('')) =>
        loadFiles(libs).then(() => {
          const objectURL = bufferToUrl(contents);

          if (screenRef?.current && window.emulators) {
            window.emulators.pathPrefix = pathPrefix;
            window
              .Dos(screenRef.current as HTMLDivElement)
              .run(objectURL)
              .then((ci) => {
                setDos(ci);
                appendFileToTitle(url);
                cleanUpBufferUrl(objectURL);
                cleanUploader();
              });
          }
        })
      );
    }

    return () => {
      if (dos) {
        dos?.exit?.();
        window.SimpleKeyboardInstances?.emulatorKeyboard?.destroy?.();
      }
    };
  }, [appendFileToTitle, dos, fs, screenRef, url]);

  useEffect(() => {
    if (dos) {
      updateWindowSize(dos.frameHeight, dos.frameWidth);

      dos.events().onMessage((_msgType, _eventType, command, message) => {
        if (command === 'LOG_EXEC') {
          const [dosCommand] = message
            .replace('Parsing command line: ', '')
            .split(' ');

          if (dosCommand.toUpperCase() === 'EXIT') {
            close(id);
          }
        }
      });

      dos
        .events()
        .onFrameSize((width, height) =>
          updateWindowSize(height * 2, width * 2)
        );
    }
  }, [close, dos, id, updateWindowSize]);
};

export default useJSDOS;
