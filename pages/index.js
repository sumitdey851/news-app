import Head from "next/head";
import Layout from "../components/layout";
import NewsCard from "../components/newsCard";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=5d82c7ac29bd43d58fffd2b6a2909c9e"
  );
  const data = await res.json();

  return {
    props: { headlines: data.articles },
  };
};

export default function Home({ headlines }) {
  headlines.map((article) => (article.source.id = Math.random()));
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <main className={styles.main}>
        <h1>Headlines</h1>
        {headlines.map((article) => (
          <NewsCard
            key={article.source.id}
            urlToImage={article.urlToImage}
            title={article.title}
            description={article.description}
            author={article.author}
            url={article.url}
          />
        ))}
      </main>
    </div>
  );
}
