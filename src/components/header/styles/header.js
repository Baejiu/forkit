import styled from 'styled-components/macro';

export const Background = styled.div`
  border-bottom: 2px solid #999;
  background-color: #fff;
  position: relative;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 40px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  display: inline-block;
  height: 36px;
  width: 134px;
  background-color: #f7f7f7;
  text-align: center;
  line-height: 36px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
