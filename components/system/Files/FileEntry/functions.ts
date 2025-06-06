export const getIconByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return '/System/Icons/iso.png';
    case '.zip':
      return '/System/Icons/zip.png';
    default:
      return '/System/Icons/unknown.png';
  }
};
export const getProcessByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
      return 'V86';
    case '.iso':
    case '.zip':
      return 'FileExplorer';
    default:
      return '';
  }
};
