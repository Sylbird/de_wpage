import { basename, dirname } from 'path';
import { styled } from 'styled-components';
import { cleanUpBufferUrl } from 'utils/functions';

const onLoad: React.ReactEventHandler<HTMLImageElement> = ({ target }) => {
  const img = target as HTMLImageElement;

  img.style.setProperty('visibility', 'visible');

  if (img.src.startsWith('blob:')) cleanUpBufferUrl(img.src);
};

type IconProps = {
  $imgSize: number;
  src?: string;
};

const Icon = styled.img.attrs<IconProps>(({ $imgSize, src }) => ({
  draggable: false,
  onLoad,
  src:
    !src || src.startsWith('blob:')
      ? src || undefined
      : `${dirname(src)}/${$imgSize}x${$imgSize}/${basename(src)}`
}))<IconProps>`
  visibility: hidden;
`;

export default Icon;
