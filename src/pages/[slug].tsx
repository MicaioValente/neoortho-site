import axios from 'axios'

import About from "../pageComponents/About";
import Events from "../pageComponents/Events";

const Page = ({ token, path, dataValues }: any) => {
  switch (path) {
    case "eventos":
      return (<Events token={token} dataValues={dataValues} />);
    case "quem-somos":
      return (<About dataValues={dataValues} />);
    case "contato":
      return (<Events token={token} dataValues={dataValues} />);
    case "area-exclusiva":
      return (<Events token={token} dataValues={dataValues} />);

    default:
      break;
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

export const getStaticProps = async (props: any) => {

  const { params } = props;
  let path = params?.slug;

  const baseUrl = process.env.NEXT_PUBLIC_URL;

  let token = '';

  try {
    const res = await axios.post(
      `${baseUrl}/auth`,
      {
        email: process.env.NEXT_PUBLIC_EMAIL,
        password: process.env.NEXT_PUBLIC_PASSWORD,
        rememberMe: true
      }
    )

    if (res.status === 200) {
      const { token } = await res.data;
      console.log(token);

      return {
        props: {
          path,
          dataValues: params,
          token: token,
        },
        revalidate: 120
      }

    }

    console.log('Network response was not ok.');
    return {
      props: {
        path,
        dataValues: params,
        token: token,
      }
    }

  } catch (error: any) {
    console.log(`There has been a problem with your fetch operation: ${error.message}`);
    return {
      props: {
        path,
        dataValues: params,
        token: token,
      }
    }
  }

}

export default Page;