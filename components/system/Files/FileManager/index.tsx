import { basename, extname, resolve } from 'path';
import FileEntry from 'components/system/Files/FileEntry';
import StyledFileManager from 'components/system/Files/FileManager/StyledFileManager';
import useFiles from 'hooks/useFiles';

type FileManagerProps = {
  directory: string;
};

const FileManager = ({ directory }: FileManagerProps): JSX.Element => (
  <StyledFileManager>
    {useFiles(directory, (file) => (
      <FileEntry
        key={file}
        name={basename(file, extname(file))}
        path={resolve(directory, file)}
      />
    ))}
  </StyledFileManager>
);

export default FileManager;
