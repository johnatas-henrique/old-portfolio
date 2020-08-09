import styled from 'styled-components';

const StyledDock = styled.nav`

  display: flex;
  justify-content: space-around;
  overflow: hidden;
  background: ${({ theme }) => theme.primaryOne};
  color: ${({ theme }) => theme.primaryTwo};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  div.left {
    display: flex;
    justify-content: left;
    width: 50%;
  }

  div {
    display: flex;
    justify-content: space-around;
    width: 50%;
  }

  p, a {
    margin: 0 1rem;
    font-size: 2rem;
    /* text-transform: uppercase; */
    font-weight: bold;
    color: ${({ theme }) => theme.primaryTwo};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      background-color: ${({ theme }) => theme.primaryOne};
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export default StyledDock;