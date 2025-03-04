import { basename, extname, resolve } from 'path';
import FileEntry from 'components/system/Files/FileEntry';
import StyledFileEntry from 'components/system/Files/FileEntry/StyledFileEntry';
import StyledFileManager from 'components/system/Files/FileManager/StyledFileManager';
import useFiles from 'components/system/Files/FileManager/useFiles';
import useFileDrop from 'components/system/Files/FileManager/useFileDrop';

type FileManagerProps = {
  directory: string;
};

const FileManager = ({ directory }: FileManagerProps): React.JSX.Element => {
  const { files, updateFiles } = useFiles(directory);

  return (
    <StyledFileManager {...useFileDrop(directory, updateFiles)}>
      {files.map((file) => (
        <StyledFileEntry key={file}>
          <FileEntry
            name={
              extname(file) === '.url'
                ? basename(file, extname(file))
                : basename(file)
            }
            path={resolve(directory, file)}
          />
        </StyledFileEntry>
      ))}
    </StyledFileManager>
  );
};

export default FileManager;
