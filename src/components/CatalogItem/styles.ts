import styled from 'styled-components';

// Card
export const Container = styled.div.attrs(props => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: #131528;
  padding: 1rem;
  border-radius: 12px;

  a {
    text-decoration: none;
    color: #fafaff;
  }

  img {
    max-width: 30rem;
    max-height: 30rem;
    margin: auto;
  }

  div.title {
    font-size: 2rem;
    font-weight: bold;
  }

  div.description {
    font-size: 1.5rem;
  }

  div.price {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 0.5rem 0;
  }
`;
