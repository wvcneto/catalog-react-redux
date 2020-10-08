import styled from 'styled-components';
import { shade } from 'polished';

// Card
export const Container = styled.div`
  width: 300px;
  height: 440px;
  margin: 24px 12px;
  padding: 18px 12px;
  background: #131521;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
`;

// img
export const Image = styled.div`
  img {
    width: 100%;
    height: 220px;
    padding: 12px;
  }
`;

// Content
export const Content = styled.div`
  padding: 8px 12px;
  text-align: center;
  h2 {
    margin: 12px 0;
  }
  p {
    margin: 8px 0;
  }
`;

export const Button = styled.button`
  height: 56px;
  background: #237274;
  color: #fcfcfa;
  border-radius: 12px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#237274')};
  }
`;
