import { useProcesses } from 'contexts/process';
import useFileInfo from 'components/system/Files/FileEntry/useFileInfo';
import StyledFileEntry from 'components/system/Files/FileEntry/StyledFileEntry';
import { useCallback } from 'react';
import Image from 'styles/custom/Image';
import Button from 'styles/custom/Button';
import useDoubleClick from 'hooks/useDoubleClick';

type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry = ({ name, path }: FileEntryProps): JSX.Element => {
  const { icon, pid, url } = useFileInfo(path);
  const { open } = useProcesses();
  const onClick = useCallback(() => open(pid, url), [open, pid, url]);

  return (
    <StyledFileEntry>
      <Button onClick={useDoubleClick(onClick)}>
        <figure>
          <Image src={icon} alt={name} />
          <figcaption>{name}</figcaption>
        </figure>
      </Button>
    </StyledFileEntry>
  );
};

export default FileEntry;
