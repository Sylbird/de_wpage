import useFile from 'components/system/Files/FileEntry/useFile';
import processDirectory from 'contexts/process/directory';
import type { MenuItem } from 'contexts/menu/useMenuContextState';

const useContextMenu = (
  url: string,
  pid: string,
  deleteFile: () => void
): MenuItem[] => {
  const { icon: pidIcon } = processDirectory[pid] || {};
  const openFile = useFile(url, pid);
  const menuItems: MenuItem[] = [{ label: 'Delete', action: deleteFile }];

  if (pid) {
    menuItems.unshift(
      {
        icon: pidIcon,
        label: 'Open',
        primary: true,
        action: openFile
      },
      { separator: 1 }
    );
  }

  return menuItems;
};

export default useContextMenu;
