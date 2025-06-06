import { useFileSystem } from 'contexts/fileSystem';
import { useCallback, useEffect, useState } from 'react';

type Files = {
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

  useEffect(updateFiles, [updateFiles]);

  return {
    files,
    updateFiles
  };
};

export default useFiles;
