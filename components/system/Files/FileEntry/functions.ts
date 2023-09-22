export const getIconByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return '/System/Icons/48x48/image.png';
    default:
      return '/System/Icons/48x48/unknown.png';
  }
};
export const getProcessByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return 'V86';
    default:
      return '';
  }
};
