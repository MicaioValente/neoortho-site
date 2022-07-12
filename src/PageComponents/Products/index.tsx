import Head from "next/head";

import MainProducts from "./MainProducts";

const Products = ({ dataValues }: any) => {

  return (
    <>
      <Head>
        <title>Products</title>
        <meta
          name="products"
          content="MAIS DO QUE CUIDAR DOS SEUS DADOS, CUIDAMOS DO SEU NEGÓCIO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainProducts />
    </>
  )
}

export default Products;