import styled from 'styled-components';

export const Field = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
`;

export const Label = styled.label`
  font-family: 'Inter', sans-serif;
  transition: all 0.2s;
  touch-action: manipulation;
  color: #4a4c53;
`;

export const Input = styled.input`
  font-family: 'Inter', sans-serif !important;
  transition: all 0.2s;
  touch-action: manipulation;
  font-size: 1.5em;
  border: 0;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  font-family: inherit;
  -webkit-appearance: none;
  padding: 19px 31px;
  vertical-align: middle;
  cursor: text;
  &:focus {
    outline: 0;
    border-bottom: 1px solid #666;
  }
  &:not(:focus):placeholder-shown + label {
    cursor: text;
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 2.925rem) translateX(2em) scale(1.4);
    transition: none;
  }
  &::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }
  &:focus::-webkit-input-placeholder {
    opacity: 1;
  }
  &:not(:placeholder-shown) + label,
  input:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
  }
`;
