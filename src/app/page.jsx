import Head from "next/head";
import Banner from "./home-sections/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>PlayGrid | Home</title>
        <meta
          name="description"
          content="Discover and buy the best PC, PlayStation, and Xbox games. Explore a massive collection of games for all platforms!"
        />
      </Head>
      <div>
        <Banner></Banner>
      </div>
    </>
  );
}
