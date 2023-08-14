import { useEffect, useState } from 'react';
import * as BrowserFS from 'browserfs';
import type { FSModule } from 'browserfs/dist/node/core/FS';
import { FileSystemContextState } from 'contexts/fileSystem/types';

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule | null>(null);

  useEffect(() => {
    BrowserFS.install(window);
    BrowserFS.configure(
      {
        fs: 'IndexedDb'
      },
      () => {
        setFs(BrowserFS.BFSRequire('fs'));
      }
    );
  }, [setFs]);
  return { fs };
};

export default useFileSystemContextState;
