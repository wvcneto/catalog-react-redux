import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
  className: props.className,
}))`
  grid-area: main;

  ul.products {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  li {
    flex: 0 1 34rem;
    margin: 1rem;
    height: 50rem;
    border-bottom: 0.2rem;
    list-style-type: none;
    padding: 0;
  }
`;
