import Head from "next/head";

import Banner from "../../components/Banner";
import Banner2 from "../../components/Banner2";
import Certificates from "../../components/Certificates";
import Policies from "../../components/Policies";
import Presentation from "../../components/presentation";


import { banner2AboutData, bannerAboutData, certificatesAboutData, ethicData, historyData, policiesAboutData, } from "../../mocks/data";

const About = ({ dataValues }) => {

  const { slug } = dataValues;

  return (
    <>
      <Head>
        <title>{dataValues?.titulo}</title>
        <meta
          name="description"
          content="MAIS DO QUE CUIDAR DOS SEUS DADOS, CUIDAMOS DO SEU NEGÓCIO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        title={bannerAboutData?.title}
        image={bannerAboutData?.image}
      />
      <Banner2
        title={banner2AboutData?.title}
        subtitle={banner2AboutData?.subtitle}
        paragraph={banner2AboutData?.paragraph}
        image={banner2AboutData?.image}
      />
      <Presentation
        title={historyData?.title}
        paragraph={historyData?.paragraph}
        image={historyData?.image}
        cards={historyData?.cards}
        squareSize="200"
      />
      <Policies
        home={false}
        title={policiesAboutData?.title}
        paragraph={policiesAboutData?.paragraph}
        cards={policiesAboutData?.cards}
      />
      <Certificates
        title={certificatesAboutData?.title}
        paragraph={certificatesAboutData?.paragraph}
        cards={certificatesAboutData?.cards}
      />
      <Presentation
        title={ethicData?.title}
        image={ethicData?.image}
        cards={ethicData?.cards}
        squareSize="200"
        imageLeft
      />

    </>
  )
}

export default About;