import styled from 'styled-components';

// CSS in JS
// JS Programming
// Standards
// A11Y

export const SR_Only = styled.span`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;

  ${({ $focusable }) =>
    $focusable &&
    /* css */ `:focus {
      overflow: initial;
      position: initial;
      clip: initial;
      clip-path: initial;
      width: initial;
      height: initial;
      margin: initial;
      border: initial;
      padding: initial;
      white-space: initial;    
    }`}
`;

// SR_Only.displayName = 'SR_Only';
