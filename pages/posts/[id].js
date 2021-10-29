import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/post';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={utilStyles.listItem}>
        <h2>{postData.id}</h2>
        <h2>{postData.title}</h2>
        <p>{postData.body}</p>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const data = await getPostData(params.id);
  return {
    props: {
      postData: data,
    },
  };
}
