import { useCallback, useEffect, useMemo, useState } from 'react';
import { BFSRequire, configure, FileSystem } from 'browserfs';
import type { FSModule } from 'browserfs/dist/node/core/FS';
import type { FileSystemContextState } from 'contexts/fileSystem/types';
import FileSystemConfig from 'contexts/fileSystem/FileSystemConfig';
import MountableFileSystem from 'browserfs/dist/node/backend/MountableFileSystem';
import { BFSCallback } from 'browserfs/dist/node/core/file_system';
import IsoFS from 'browserfs/dist/node/backend/IsoFS';
import ZipFS from 'browserfs/dist/node/backend/ZipFS';
import { extname } from 'path';

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule | null>(null);
  const rootFs = useMemo(() => fs?.getRootFS() as MountableFileSystem, [fs]);
  const mountFs = useCallback(
    (url: string, callback: () => void): void =>
      fs?.readFile(url, (_readError, fileData = Buffer.from('')) => {
        const isIso = extname(url) === '.iso';
        const createFs: BFSCallback<IsoFS | ZipFS> = (_createError, newFs) => {
          if (newFs) {
            rootFs?.mount(url, newFs);
            callback();
          }
        };

        if (isIso) {
          FileSystem.IsoFS.Create({ data: fileData }, createFs);
        } else {
          FileSystem.ZipFS.Create({ zipData: fileData }, createFs);
        }
      }),
    [fs, rootFs]
  );
  const unMountFs = useCallback(
    (url: string): void => rootFs?.umount(url),
    [rootFs]
  );

  useEffect(() => {
    if (!fs) {
      configure(FileSystemConfig, () => setFs(BFSRequire('fs')));
    }
  }, [fs]);

  return { fs, mountFs, unMountFs };
};

export default useFileSystemContextState;
