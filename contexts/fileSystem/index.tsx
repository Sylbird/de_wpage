import useFileSystemContextState from 'contexts/fileSystem/useFileSystemContextState';
import { initialFileSystemContextState } from 'utils/initialContextStates';
import type { FileSystemContextState } from 'contexts/fileSystem/types';
import contextFactory from 'contexts/contextFactory';

const { Consumer, Provider, useContext } =
  contextFactory<FileSystemContextState>(
    initialFileSystemContextState,
    useFileSystemContextState
  );

export {
  Consumer as FileSystemConsumer,
  Provider as FileSystemProvider,
  useContext as useFileSystem
};
