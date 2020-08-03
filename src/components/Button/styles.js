import styled from 'styled-components';

export const Button = styled.button`
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  background-color: ${props => (props.outline ? '#FFF' : '#FB8F1D')};
  color: ${props => (props.outline ? '#FB8F1D' : '#FFF')};
  height: 44px;
  border: 1px solid #fb8f1d;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  outline: none;
  cursor: pointer;
`;
