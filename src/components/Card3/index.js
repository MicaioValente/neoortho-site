import { Container } from "./styles";

import { H3 } from "../H3";
import { Paragraph } from "../Paragraph";
import IconFrame from "../IconFrame";

const Card3 = ({ title, text, src, home }) => {
  return (
    <Container>
      <div className="texts">
        <H3>{title}</H3>
        <Paragraph style={{ color: '#0c0' }}>{text}</Paragraph>
      </div>
      <IconFrame src={src} />
    </Container>
  );
}

export default Card3;