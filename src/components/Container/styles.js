import styled from 'styled-components';

export const Container = styled.div`
  width: 960px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;
