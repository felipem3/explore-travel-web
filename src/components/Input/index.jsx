import React from 'react';
import { Field, Input, Label } from './styles';
function index({ type, name, id, placeholder, label }) {
  return (
    <Field>
      <Input id={id} type={type} name={name} placeholder={placeholder} />
      <Label htmlFor={name}>{label}</Label>
    </Field>
  );
}

export default index;
