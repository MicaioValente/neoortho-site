import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;