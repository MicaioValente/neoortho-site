import { Container, Link } from "./styles";

import { H3 } from "../H3";
import { Paragraph } from "../Paragraph";

const Card2 = ({ title, text, link, href, maxWidth }) => {
  return (
    <Container maxWidth={maxWidth}>
      {title && (
        <H3>{title}</H3>
      )}
      <Paragraph>{text}</Paragraph>
      {link && (
        <Link target="_blank" href={href}>{link}</Link>
      )}
    </Container>
  );
}

export default Card2;