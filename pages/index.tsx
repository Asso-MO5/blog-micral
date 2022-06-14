import Layout from "../lib/Layout/Layout";
import OgBalise from "../lib/OgBalise/OgBalise";
import LastPosts from "../lib/LastPosts/LastPosts";
import SearchButton from "../lib/SearchButton/SearchButton";

export default function Home() {
  return (
    <Layout OgBalise={<OgBalise />}>
             
             <>
             <SearchButton/>
             <LastPosts/>
             </>
    
    </Layout>
  );
}
