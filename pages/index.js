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
    Hi! I’m Nashly Bondoc, an IT student who enjoys technology, coding, and
    learning new tools. I’m interested in building user-friendly websites and
    applications.
  </p>

  <p>
    I also enjoy basketball, playing online games, going to the gym, and
    traveling to different places. I like exploring new ideas and improving my
    skills in programming and web development. In the future, I hope to build a
    successful career in the technology industry and create useful applications
    that can help people.
  </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}