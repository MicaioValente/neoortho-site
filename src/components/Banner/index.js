import { Container } from "./styles";

const Banner = ({ title, image }) => {
  return (
    <Container src={image}>
      {title && (
        <h1>{title}</h1>
      )}
    </Container>
  );
}

export default Banner;