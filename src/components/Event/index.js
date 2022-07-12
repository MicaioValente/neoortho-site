import { Container, Link } from "./styles";

import { H2 } from "../H2";

import Post from "../Post";

import dayOfMonth from "../../utils/dayOfMonth";
import getHours from "../../utils/getHours";

const Event = ({ post }) => {

  const { beginDate, endDate, name, resumo, slug } = post;

  return (
    <Container>
      <H2>PRÓXIMO EVENTO</H2>
      <Post
        date={{
          day: dayOfMonth(beginDate),
          hour: getHours(beginDate, endDate)
        }}
        title={name}
        text={resumo}
        tag={slug}
      />
      <Link href="#events">VER OUTROS</Link>
    </Container>
  );
}

export default Event;