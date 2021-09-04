import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 600px;

  @media (max-width: 700px) {
    width: 85vw;
    margin-top: 50px;
  }
`