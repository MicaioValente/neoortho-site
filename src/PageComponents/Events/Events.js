import Head from "next/head";

import MainEvent from "./MainEvent";
import Posts from "../../components/Posts";

import { eventsData } from "../../mocks/data";

const Events = ({ token, dataValues }) => {

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

      <MainEvent
        token={token}
        post={eventsData?.posts[0]}
      />
      <Posts
        id="events"
        token={token}
        posts={eventsData?.posts}
      />
    </>
  )
}

export default Events;