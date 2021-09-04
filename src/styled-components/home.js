import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 600px;

  input {
    font-size: 23px;
    border-radius: 15px;
    padding: 20px;
    width: 100%;
    background: var(--secondary-color);
    color: var(--text-color);
    border: 2px solid var(--accent-color);
  }
`;