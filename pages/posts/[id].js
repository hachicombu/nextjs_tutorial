import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

// ブログページ表示までの道のり：
// 1. Reactコンポーネント作成
// 2. getStaticPaths()でidがとりうる値のリスト（ssg-ssr, pre-rendering）を返す
// 3. getStaticProps()でidに基づいて必要なデータを取得

// 1. Reactコンポーネント
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// 2. getStaticPaths()でidがとりうる値のリスト（ssg-ssr, pre-rendering）を返す
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // false: pathsにないURLにアクセスされたら404を表示
  };
}

// 3. getStaticProps()でidに基づいて必要なデータを取得
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
