import { server } from '../config/index';
import Head from 'next/head'
import ArticleList from '../components/ArticleList';
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home({ articles }) {

  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development. programming" />
      </Head>
      <ArticleList articles={articles } />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();


  return {
    props: {
      articles
    }
  }
}