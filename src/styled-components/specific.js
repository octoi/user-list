import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 100vh;
  
  @media (max-width: 900px) {
    width: 85vw;
    margin-top: 50px;
    margin-bottom: 10px;
    height: 100%;
  }
`

export const UserContainer = styled.div`
  position: relative;
  background: var(--secondary-color);
  border-radius: 13px;
  width: 100%;

  .banner {
    width: 100%;
    border-radius: 13px 13px 0px 0px;
    height: 200px;
    object-fit: cover;
    filter: blur(3px);
    -webkit-filter: blur(3px);
  }

  .user {
    position: absolute;
    top: 150px;
    left: 20px;
    display: flex;
    align-items: flex-end;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--accent-color);
    }

    h2 {
      margin: 0px;
      margin-left: 20px;
      margin-bottom: 10px;
      font-size: 35px;
    }
  }

  .content { 
    margin-top: 40px;
    padding: 30px 30px 10px 30px; 

    p {
      font-size: 23px;
      opacity: 0.8;
    }
  }

  @media (max-width: 625px) {
    .user {
      flex-direction: column;
      align-items: flex-start;

      h2 {
        margin-top: 10px;
        margin-left: 8px;
      }
    }

    .content {
      margin-top: 90px;
    }
  }
`