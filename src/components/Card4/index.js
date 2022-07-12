import Image from "next/image";

import { Container } from "./styles";

import { H3 } from "../H3";
import { Caption } from "../Caption";

const Card4 = ({ title, text, icons }) => {
  return (
    <Container>
      <H3 align="center">{title}</H3>
      <div className="icons">
        {icons.map(({ src }, index) => (
          <div key={index}>
            <Image
              src={src}
              layout='fill'
              objectFit="contain"
              alt="icon"
            />
          </div>
        ))}
      </div>
      <Caption>{text}</Caption>
    </Container>
  );
}

export default Card4;