{
/* Client-Side Navigation
・JSによってページを切り替えるので、URLを切り替えても再読み込み不要
・ブラウザのページ遷移より高速
・クライアントの状態（検索KWなど）を保ってページを遷移
*/
}

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    // Layoutコンポーネントでラップ
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
