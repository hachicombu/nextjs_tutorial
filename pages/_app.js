import "../styles/global.css";

// ・Appコンポーネント：すべてのページに読み込まれるトップレベルコンポーネント
// ・全ページで実行したい処理・レイアウト・ファイルを読み込む
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
