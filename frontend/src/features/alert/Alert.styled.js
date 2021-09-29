import styled from 'styled-components';
import { palette } from '../../styles/Global';

export const Alert = styled.div`
  padding: 0.8rem;
  margin: 1rem 0;
  opacity: 0.9;
  ${(props) => {
    switch (props.theme) {
      case 'primary':
        return `background: ${palette.primary.background}; color: ${palette.primary.color};`;
      case 'dark':
        return `background: ${palette.dark.background}; color: ${palette.dark.color};`;
      case 'danger':
        return `background: ${palette.danger.background}; color: ${palette.danger.color};`;
      case 'success':
        return `background: ${palette.success.background}; color: ${palette.success.color};`;
      case 'white':
        return `background: ${palette.white.background}; color: ${palette.white.color}; border: ${palette.white.border};`;
      default:
        return `background: ${palette.light.background}; color: ${palette.light.color};`;
    }
  }}
`;
