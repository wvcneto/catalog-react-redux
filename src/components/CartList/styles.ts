import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
  className: props.className,
}))`
  grid-area: main;
  text-align: center;
  font-size: 2rem;
  margin: 4px;

  th {
    width: 25%;
    font-weight: bold;
  }

  background: #fafaff;
  color: #131528;
  border-radius: 12px;
`;
