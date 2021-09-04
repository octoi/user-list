import React from 'react';
import { credits, creditsLink } from '../utils/list.json';
import { Container } from '../styled-components/footer';

export default function Footer() {
  return (
    <Container>
      <p><span>&copy; Developed By</span> <a href={creditsLink}>{credits}</a></p>
    </Container>
  )
}
