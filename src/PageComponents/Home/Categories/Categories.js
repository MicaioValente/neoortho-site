import { Container } from "./styles";

import Card from "../../../components/Card";

const Categories = ({ title, cards }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        {cards?.map(({ href, image, alt, text }, index) => (
          <Card key={index} href={href} src={image} alt={alt} text={text} />
        ))}
      </div>
    </Container>
  );
}

export default Categories;