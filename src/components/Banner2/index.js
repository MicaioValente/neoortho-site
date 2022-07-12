import { Container, Image, Texts } from "./styles";

const Banner2 = ({ title, subtitle, paragraph, image }) => {
  return (
    <Container>

      <Image src={image} />

      <Texts>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{paragraph}</p>
      </Texts>

    </Container>
  );
}

export default Banner2;