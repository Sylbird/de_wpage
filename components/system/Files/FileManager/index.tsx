import { basename, extname, resolve } from 'path';
import FileEntry from 'components/system/Files/FileEntry';
import StyledFileManager from 'components/system/Files/FileManager/StyledFileManager';
import useFiles from 'components/system/Files/FileManager/useFiles';
import useFileDrop from 'components/system/Files/FileManager/useFileDrop';

type FileManagerProps = {
  directory: string;
};

const FileManager = ({ directory }: FileManagerProps): JSX.Element => {
  const { files, getFiles } = useFiles(directory);

  return (
    <StyledFileManager {...useFileDrop(directory, getFiles)}>
      {files.map((file) => (
        <FileEntry
          key={file}
          name={basename(file, extname(file))}
          path={resolve(directory, file)}
        />
      ))}
    </StyledFileManager>
  );
};

export default FileManager;
