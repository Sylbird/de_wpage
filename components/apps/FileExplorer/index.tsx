import FileManager from 'components/system/Files/FileManager';
import { ProcessComponentProps } from 'components/system/RenderProcess';
import { useProcesses } from 'contexts/process';

const FileExplorer = ({ id }: ProcessComponentProps) => {
  const {
    processes: {
      [id]: { url }
    }
  } = useProcesses();

  return <FileManager directory={url || '/'} />;
};

export default FileExplorer;
