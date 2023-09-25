import { useProcesses } from 'contexts/process';
import useFileInfo from 'components/system/Files/FileEntry/useFileInfo';
import { useCallback } from 'react';
import Image from 'styles/custom/Image';
import Button from 'styles/custom/Button';
import useDoubleClick from 'hooks/useDoubleClick';
import { useSession } from 'contexts/session';
import { createPid } from 'contexts/process/function';

type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry = ({ name, path }: FileEntryProps): JSX.Element => {
  const { icon, pid, url } = useFileInfo(path);
  const { setForegroundId } = useSession();
  const { open, processes } = useProcesses();
  const onClick = useCallback(() => {
    const id = createPid(pid, url);

    if (processes[id]) {
      setForegroundId(id);
    } else {
      open(pid, url);
    }
  }, [open, pid, processes, setForegroundId, url]);

  return (
    <Button onClick={useDoubleClick(onClick)}>
      <figure>
        <Image src={icon} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </Button>
  );
};

export default FileEntry;
