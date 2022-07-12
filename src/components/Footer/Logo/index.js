import Image from "next/image";
import Link from "next/link";

import { Container } from "./styles";

const Logo = ({ src }) => {
  return (
    <Container>
      <Link href="/" passHref>
        <div className="parent">
          <Image
            src={src}
            layout='fill'
            objectFit="contain"
            alt="logo"
            priority
          />
        </div>
      </Link>
    </Container>
  );
}

export default Logo;