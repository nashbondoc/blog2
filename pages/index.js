import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
     <p>
  I chose Information Technology because I enjoy working with computers,
  technology, and coding. I’m interested in learning how websites and
  applications are created and how they can help people.
</p>

<p>
  I chose this specialization because I want to improve my programming and
  problem-solving skills. I also want to learn new technologies and gain
  experience in creating user-friendly systems. In the future, I hope to use
  my skills to build useful applications and have a successful career in the
  technology industry.
</p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}