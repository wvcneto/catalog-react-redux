import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div.attrs(props => ({
  className: props.className,
}))`
  background: #225072;
  color: #fafaff;
  display: flex;
  grid-area: header;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  a {
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: bold;
    color: #fafaff;
    margin: 0 1.5rem;

    span {
      font-size: 1.5rem;
    }
  }

  .menu a:hover {
    color: ${shade(0.1, '#131528')};
  }
`;
