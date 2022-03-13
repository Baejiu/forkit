import styled from 'styled-components/macro';

export const Background = styled.div`
  background-color: #f7f7f7;
  align-items: flex-start;
  font-size: 1rem;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  text-align: center;
  @media ${(props) => props.theme.tablet} {
  }
`;

export const Sidebar = styled.div`
  background-color: #fff;
  border-right: 2px solid #aaa;
  flex-basis: 360px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease-out;
  transform: translateX(0);
  > div {
    height: 100%;
  }
  > button {
    display: none;
    background-color: #aaa;

    position: absolute;
    z-index: 999;
    top: 0;
    right: -50px;
    width: 50px;
    height: 50px;
  }
  @media ${(props) => props.theme.tablet} {
    position: fixed;
    z-index: 99;
    top: 0;
    width: 280px;
    bottom: 0;
    transform: translateX(${(restProps) => restProps.xPosition}px);
    > button {
      display: block;
    }
  }
`;

export const Header = styled.div`
  flex-basis: auto;
  width: 100%;
`;

export const Contents = styled.div`
  flex-basis: auto;
  width: 100%;
`;
