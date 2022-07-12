import { Container } from "./styles";

const ImageFrame = ({ src, imageLeft, squareSize }) => {
  return (
    <Container
      className={imageLeft && "image-left"}
      squareSize={squareSize}
      src={src}
    >
      <span></span>
    </Container>
  );
}

export default ImageFrame;