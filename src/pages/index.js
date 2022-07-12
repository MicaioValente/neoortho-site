import axios from 'axios'

import Head from '../components/Head'
import Categories from '../pageComponents/Home/Categories'
import Posts from '../components/Posts'

import Banner from '../components/Banner'
import Certificates from '../components/Certificates'
import Policies from '../components/Policies'
import Presentation from '../components/presentation'

import { presentationData1, presentationData2, policiesData, certificatesData, categoriesData, bannerData, headData, eventsHomeData } from '../mocks/data'

export default function Home({ token, res }) {

  return (
    <>
      <Head
        title={headData?.title}
        description={headData?.description}
      />
      <Banner
        title={bannerData?.title}
        image={bannerData?.image}
      />
      <Categories
        title={categoriesData?.title}
        cards={categoriesData?.cards}
      />
      <Posts
        token={token}
        posts={eventsHomeData?.posts}
      />
      <Presentation
        title={presentationData1?.title}
        image={presentationData1?.image}
        cards={presentationData1?.cards}
        maxWidth
      />
      <Policies
        title={policiesData?.title}
        cards={policiesData?.cards}
      />
      <Certificates
        cards={certificatesData?.cards}
      />
      <Presentation
        title={presentationData2?.title}
        image={presentationData2?.image}
        cards={presentationData2?.cards}
        maxWidth
        imageLeft
      />
    </>
  )
}

export const getStaticProps = async () => {

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
          token: token,
        },
        revalidate: 120
      }

    }

    console.log('Network response was not ok.');
    return {
      props: {
        token: token,
      }
    }

  } catch (error) {
    console.log(`There has been a problem with your fetch operation: ${error.message}`);
    return {
      props: {
        token: token,
      }
    }
  }

}