import styled from 'styled-components';

export const Container = styled.div`
  text-align: right;
  flex: 1;
`;

export const MenuContainer = styled.ul`
  display: inline;
  flex: 1;
  text-align: right;
`;

export const Menu = styled.li`
  display: inline-block;
  margin-left: 31px;
  &:last-child {
    margin-right: 36px;
  }
`;

export const Link = styled.a`
  color: ${props => (props.selected ? '#202336' : '#B8BECD')};
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  text-decoration: none;
  padding: 8px;
`;
