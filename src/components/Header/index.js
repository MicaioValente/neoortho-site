import Logo from "./Logo";
import NavBar from "./NavBar";

import { Container } from "./styles";

import { headerData } from '../../mocks/data';

const Header = () => {
  return (
    <Container>
      <Logo src={headerData?.logo} />
      <NavBar links={headerData.links} />
    </Container>
  );
}

export default Header;