import styled from 'styled-components/macro';

export const List = styled.ul`
  width: 100%;
`;

export const Item = styled.li`
  background-color: white;
  color: ${({ active }) => (active === 'true' ? 'red' : '#000')};
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  margin: 2px 0;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: #e6e6e6;
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    color: red;
  }
`;
