import styled from 'styled-components';
import backgroundImage from '../../assets/img/bg.png';

export const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  width: 356px;
  margin-top: 32px;
  line-height: 80px;
`;

export const Subtitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 22px;
  margin-top: 72px;
  &:after {
    content: '';
    display: block;
    width: 32px;
    height: 2px;
    background: #000;
    margin-top: 25px;
  }
`;

export const Section = styled.section`
  margin-top: 70px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 70vh;
`;

export const Form = styled.form`
  flex-direction: row;
  margin-top: 48px;
  justify-content: space-between;
`;
