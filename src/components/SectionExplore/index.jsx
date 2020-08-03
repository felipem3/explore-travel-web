import React from 'react';
import { Title, Section, Subtitle, Form } from './styles';
import Container from '../Container';
import Input from '../Input';
import Button from '../Button';

function index() {
  return (
    <Section>
      <Container column={true}>
        <Title>Explore and Travel</Title>
        <Subtitle>Holiday finder</Subtitle>
        <div style={{ width: '40%' }}>
          <Form>
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="São Paulo"
              label="Cidade"
            />
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="São Paulo"
              label="Cidade"
            />
            <Button>Explore</Button>
          </Form>
        </div>
      </Container>
    </Section>
  );
}

export default index;
