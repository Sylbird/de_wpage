import { basename, extname, resolve } from 'path';
import FileEntry from 'components/system/Files/FileEntry';
import StyledFileEntry from 'components/system/Files/FileEntry/StyledFileEntry';
import StyledFileManager from 'components/system/Files/FileManager/StyledFileManager';
import useFiles from 'components/system/Files/FileManager/useFiles';
import useFileDrop from 'components/system/Files/FileManager/useFileDrop';
import { useFileSystem } from 'contexts/fileSystem';
import { useEffect } from 'react';

type FileManagerProps = {
  url: string;
};

const MOUNTABLE_EXTENSIONS = ['.iso', '.zip'];

const FileManager = ({ url }: FileManagerProps): React.JSX.Element => {
  const { deleteFile, files, updateFiles } = useFiles(url);
  const { mountFs, unMountFs } = useFileSystem();

  useEffect(() => {
    const isMountable = MOUNTABLE_EXTENSIONS.includes(extname(url));

    if (isMountable && !files.length) mountFs(url, updateFiles);
    return () => {
      if (isMountable && files.length) unMountFs(url);
    };
  }, [files, mountFs, unMountFs, updateFiles, url]);

  return (
    <StyledFileManager {...useFileDrop(url, updateFiles)}>
      {files.map((file) => (
        <StyledFileEntry key={file}>
          <FileEntry
            deleteFile={deleteFile}
            name={
              extname(file) === '.url'
                ? basename(file, extname(file))
                : basename(file)
            }
            path={resolve(url, file)}
          />
        </StyledFileEntry>
      ))}
    </StyledFileManager>
  );
};

export default FileManager;
