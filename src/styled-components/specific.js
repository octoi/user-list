import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 800px;

  @media (max-width: 900px) {
    width: 85vw;
    margin-top: 50px;
  }
`

export const UserContainer = styled.div`
  background: var(--secondary-color);
  /* padding: 20px; */
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

  .padding { padding: 20px; }
`