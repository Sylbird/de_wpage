import { basename } from 'path';
import { useFileSystem } from 'contexts/fileSystem';
import { useCallback, useEffect, useState } from 'react';

type Files = {
  deleteFile: (path: string) => void;
  files: string[];
  updateFiles: (appendFile?: string) => void;
};

const useFiles = (url: string): Files => {
  const [files, setFiles] = useState<string[]>([]);
  const { fs } = useFileSystem();

  const updateFiles = useCallback(
    (appendFile?: string) =>
      fs?.readdir(url, (_error, contents = []) =>
        setFiles((currentFiles) =>
          appendFile ? [...currentFiles, appendFile] : contents
        )
      ),
    [url, fs]
  );

  const deleteFile = useCallback(
    (path: string) =>
      fs?.unlink(path, () =>
        setFiles((currentFiles) =>
          currentFiles.filter((file) => file !== basename(path))
        )
      ),
    [fs]
  );

  useEffect(updateFiles, [updateFiles]);

  return {
    deleteFile,
    files,
    updateFiles
  };
};

export default useFiles;
