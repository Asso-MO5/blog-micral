import Layout from "../lib/Layout/Layout";
import OgBalise from "../lib/OgBalise/OgBalise";
import useWp from "../hooks/useWp";
import { post } from "../interfaces/wp.interface";

export default function Home() {
  const { isLoading, data } = useWp("/posts");

  return (
    <Layout OgBalise={<OgBalise />}>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.map((post: post) => (
            <div key={post.id}>
              <h3>{post.title.rendered}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              ></div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}
