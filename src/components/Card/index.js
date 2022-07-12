import Image from "next/image";
import Link from "next/link";

import { Container } from "./styles";

const Card = ({ href, src, alt, text }) => {
  return (
    <Container>
      <Link href={href}>
        <div>
          <div>
            <Image
              src={src}
              layout='fill'
              objectFit="cover"
              alt={alt}
            />
          </div>
          <h3>{text}</h3>
        </div>
      </Link>
    </Container>
  );
}

export default Card;