import { useRouter } from "next/router";

import { Container } from "./styles";

import LinkButton from "../../LinkButton";

const NavBar = ({ links }) => {

  const { asPath } = useRouter();

  const isActive = (asPath, href) => {
    if (asPath === undefined && href === '/') {
      return true;
    } else if (href === asPath) {
      return true;
    }
    return false;
  }

  return (
    <Container>
      <ul>
        {links?.map(({ href, text, border }, index) => (
          <li key={index}>
            <LinkButton
              href={href}
              active={isActive(asPath, href)}
              border={border}
            >
              {text}
            </LinkButton>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default NavBar;