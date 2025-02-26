import Head from "next/head";
import Banner from "./home-sections/Banner";
import dbConnect from "./database/dbConnect";

export default async function Home() {
  const demoCollection = dbConnect("movies");
  const data = await demoCollection.find({}).toArray();

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
        <header>
          <Banner></Banner>
        </header>
        <main>
          
        </main>
      </div>
    </>
  );
}
