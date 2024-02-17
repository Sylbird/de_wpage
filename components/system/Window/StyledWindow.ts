import { motion } from 'framer-motion';
import styled from 'styled-components';

type StyledWindowProps = {
  $foreground: boolean;
  $maximized?: boolean;
  $minimized?: boolean;
};

const StyledWindow = styled(motion.section)<StyledWindowProps>`
  border-radius: ${({ $maximized = false }) =>
    $maximized ? '0px' : ({ theme }) => theme.sizes.window.border.radius};
  box-shadow: ${({ $foreground, theme }) =>
    $foreground
      ? theme.colors.window.shadow
      : theme.colors.window.shadowInactive};
  display: ${({ $minimized = false }) => ($minimized ? 'none' : 'block')};
  height: 100%;
  outline: ${({ theme }) => theme.colors.window.outline};
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

export default StyledWindow;
