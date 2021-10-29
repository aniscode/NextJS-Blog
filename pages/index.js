import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getPosts } from '../lib/post';
import Link from 'next/link';

export async function getStaticProps() {
  const data = await getPosts();
  return {
    props: {
      allPostsData: data,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello , I'm Anis and from India. I'm a software engineer by profession
          currently working with Walmart. I'm passionate about learning new
          technologies and implementing them in the real world problems.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {id}
              <br />
              {title}
              <br />
              <Link href={`/posts/${id}`}>View</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
