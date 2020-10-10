import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr 5rem;
  height: 100%;
  position: relative;
  min-height: 100vh;
`;
