import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    opacity: 0.7;
  }
  
  a {
    color: var(--text-color);
    opacity: 0.9;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: var(--accent-color);
      opacity: 1;
    }
  }
`