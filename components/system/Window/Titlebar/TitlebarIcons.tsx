import { memo } from 'react';

export const MinimizeIcon = memo(() => (
  <svg viewBox="0 0 10 1" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h10v1H0z" />
  </svg>
));

export const MaximizeIcon = memo(() => (
  <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1Zm1 0h8v8H1V1Z" />
  </svg>
));

export const MaximizedIcon = memo(() => (
  <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.06.99v.99H.98c-.54 0-.98.44-.98.99V9c0 .55.44.99.98.99h6.07c.54 0 .98-.44.98-.99v-.99h.98c.54 0 .98-.44.98-.99V.99c0-.55-.44-.99-.98-.99H3.04c-.54 0-.98.44-.98.99Zm5 8.12H1.08V2.97h5.98v6.14Zm1.96-2.08h-.98V2.98c0-.55-.44-.99-.99-.99H3.04V1h5.98v6.04Z" />
  </svg>
));

export const CloseIcon = memo(() => (
  <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z" />
  </svg>
));
