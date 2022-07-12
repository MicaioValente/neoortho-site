import { Container, Date, Tag } from "./styles";

import { H3 } from "../H3";
import { Paragraph } from "../Paragraph";

const Post = ({ date, title, text, tag }) => {
  return (
    <Container>
      <Date>{date?.day}<span>{date?.hour}</span></Date>
      <H3>{title}</H3>
      <Paragraph>{text}</Paragraph>
      <Tag>{tag}</Tag>
    </Container>
  );
}

export default Post;