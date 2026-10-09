import { basename, extname } from 'path';
import { useFileSystem } from 'contexts/fileSystem';
import { useCallback, useEffect, useState } from 'react';

type Files = {
  deleteFile: (path: string) => void;
  files: string[];
  updateFiles: (appendFile?: string) => void;
  renameFile: (path: string, newName?: string) => void;
};

const useFiles = (directory: string): Files => {
  const [files, setFiles] = useState<string[]>([]);
  const { fs } = useFileSystem();

  const updateFiles = useCallback(
    (appendFile?: string) =>
      fs?.readdir(directory, (_error, contents = []) =>
        setFiles((currentFiles) =>
          appendFile ? [...currentFiles, appendFile] : contents
        )
      ),
    [directory, fs],
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
  const renameFile = useCallback(
    (path: string, newName?: string) => {
      if (!newName) return;

      const oldName = basename(path);
      const extension = extname(path);
      // Since we hide .url; we need to add it to the newName if the oldName has .url
      // from here on we use fullNewName instead of newName
      const fullNewName = extension === '.url' ? newName + '.url' : newName;

      if (fullNewName === oldName) return;

      const newPath = `${directory}/${fullNewName}`;

      fs?.rename(path, newPath, () =>
        setFiles((currentFiles) =>
          currentFiles.map((file) => (file === oldName ? fullNewName : file)),
        ),
      );
    },
    [fs, directory],
  );

  useEffect(updateFiles, [updateFiles]);

  return {
    deleteFile,
    files,
    renameFile,
    updateFiles,
  };
};

export default useFiles;
