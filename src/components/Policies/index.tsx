import { Container, Cards } from "./styles";

import Card3 from "../Card3";
import { H2 } from "../H2";
import { Paragraph } from "../Paragraph";

const Policies = ({ title, paragraph, cards }: any) => {
  return (
    <Container>
      <H2>{title}</H2>

      {paragraph && (
        <Paragraph>{paragraph}</Paragraph>
      )}

      <Cards>
        {cards.map(({ title, text, icon }: any, index: any) => (
          <Card3 key={index} title={title} text={text} src={icon} />
        ))}
      </Cards>
    </Container>
  );
}

export default Policies;