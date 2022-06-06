import Layout from "../lib/Layout/Layout";
import OgBalise from "../lib/OgBalise/OgBalise";
import LastPosts from "../lib/LastPosts/LastPosts";

export default function Home() {
  return (
    <Layout OgBalise={<OgBalise />}>
      <LastPosts/>
    </Layout>
  );
}
