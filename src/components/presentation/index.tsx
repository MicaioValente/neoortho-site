import { Container, ImageContainer, Texts } from "./styles";

import { H2 } from "../H2";
import { Paragraph } from "../Paragraph";

import Card2 from "../Card2";
import ImageFrame from "../ImageFrame";

const Presentation = ({ title, paragraph, cards, image, squareSize, maxWidth, imageLeft }: any) => {
  return (
    <Container>
      {title && (
        <H2>{title}</H2>
      )}

      {paragraph && (
        <Paragraph>{paragraph}</Paragraph>
      )}

      <div className={imageLeft && "image-left"}>
        <Texts>
          {cards.map(({ title, text, link, href }: any, index: any) => (
            <Card2
              key={index}
              title={title}
              text={text}
              link={link}
              href={href}
              maxWidth={maxWidth} />
          ))}
        </Texts>

        <ImageContainer>
          <ImageFrame src={image} imageLeft={imageLeft} squareSize={squareSize} />
        </ImageContainer>
      </div>
    </Container>
  );
}

export default Presentation;