import Link from "next/link";

import { Container } from "./styles";

const LinkButton = ({ children, href, active, border }) => {
  return (
    <Container
      className={
        (active && border) ? ('active border')
          : (active) ? ('active')
            : (border) ? ('border')
              : ''
      }
    >
      <Link href={href}>{children}</Link>
    </Container>
  );
}

export default LinkButton;