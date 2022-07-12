import { Cards, Container } from "./styles";

import { H2 } from "../H2";
import { Paragraph } from "../Paragraph";

import Card4 from "../Card4";

const Certificates = ({ title, paragraph, cards }) => {
  return (
    <Container>

      {title && (
        <H2>{title}</H2>
      )}

      {paragraph && (
        <Paragraph>{paragraph}</Paragraph>
      )}

      <Cards>
        {cards.map(({ title, text, icons }, index) => (
          <Card4 key={index} title={title} text={text} icons={icons} />
        ))}
      </Cards>
    </Container>
  );
}

export default Certificates;