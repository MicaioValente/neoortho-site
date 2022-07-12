import Link from "next/link";

import { Container } from "./styles";

const LinkButton2 = ({ children, href }) => {
  return (
    <Container>
      <Link href={href}>{children}</Link>
    </Container>
  );
}

export default LinkButton2;