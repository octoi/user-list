import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 600px;

  @media (max-width: 700px) {
    width: 85vw;
    margin-top: 50px;
  }

  h1 {
    font-weight: 600;
  }

  input {
    font-size: 23px;
    border-radius: 15px;
    padding: 25px 20px;
    width: 100%;
    background: var(--secondary-color);
    color: var(--text-color);
    border: 2px solid var(--accent-color);
  }

  .user-list {
    margin-top: 30px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      width: 100%;
      padding: 10px 20px;
      border-radius: 13px;
      display: flex;
      align-items: center;
      transition: 0.5s;
      cursor: pointer;
      margin-bottom: 12px;
      background: var(--secondary-color);
      border: 2px solid var(--secondary-color);
      
      &:hover {
        border: 2px solid var(--accent-color);
      }

      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid var(--accent-color);
      }

      p {
        font-size: 23px;
        font-weight: 600;
        margin-left: 20px;
      }
    }
  }
`;