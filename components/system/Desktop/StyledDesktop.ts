import styled from 'styled-components';

const StyledDesktop = styled.main`
  background-size: cover;
  background-color: #000000;
  bottom: 0;
  /*Why height: 100vh; hides the taskbar on mobile?*/
  height: 100%;
  left: 0;
  overscroll-behavior: none;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
`;

export default StyledDesktop;
