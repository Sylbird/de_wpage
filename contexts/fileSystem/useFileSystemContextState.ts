import { useEffect, useState } from 'react';
import { BFSRequire, configure } from 'browserfs';
import type { FSModule } from 'browserfs/dist/node/core/FS';
import { FileSystemContextState } from 'contexts/fileSystem/types';
import FileSystemConfig from 'contexts/fileSystem/FileSystemConfig';

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule | null>(null);

  useEffect(() => {
    if (!fs) {
      configure(FileSystemConfig, () => setFs(BFSRequire('fs')));
    }
  }, [fs]);

  return { fs };
};

export default useFileSystemContextState;
