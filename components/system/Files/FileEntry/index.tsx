import useFileInfo from 'components/system/Files/FileEntry/useFileInfo';
import Icon from 'styles/custom/Icon';
import Button from 'styles/custom/Button';
import useDoubleClick from 'hooks/useDoubleClick';
import useFile from 'components/system/Files/FileEntry/useFile';
import useContextMenu from 'components/system/Files/FileEntry/useContextMenu';
import { useMenu } from 'contexts/menu';

type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry = ({ name, path }: FileEntryProps): React.JSX.Element => {
  const { icon, pid, url } = useFileInfo(path);
  const { contextMenu } = useMenu();
  const openFile = useFile(url, pid);
  const menu = useContextMenu(url, pid);

  return (
    <Button
      onClick={useDoubleClick(openFile)}
      onContextMenu={contextMenu(menu)}
    >
      <figure>
        <picture>
          <Icon src={icon} alt={name} $imgSize={48} />
        </picture>
        <figcaption>{name}</figcaption>
      </figure>
    </Button>
  );
};

export default FileEntry;
