import StyledRenameBox from './StyledRenameBox';
import { useCallback, useEffect, useRef } from 'react';

type RenameBoxProps = {
  name: string;
  path: string;
  renameFile: (path: string, newName?: string) => void;
};

const RenameBox = ({ name, path, renameFile }: RenameBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const saveRename = useCallback(
    () => renameFile(path, inputRef.current?.value),
    [renameFile, path],
  );

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  return (
    <StyledRenameBox
      defaultValue={name}
      onBlur={saveRename}
      onKeyDown={(e) => e.key === 'Enter' && saveRename()}
      ref={inputRef}
    />
  );
};

export default RenameBox;
