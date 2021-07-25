import FeaturedPosts from "../components/home-page/featuredPosts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";
import Head from "next/head";

const Homepage = (props) => {
  return (
    <>
      <Head>
        <title>Mahi's Blog</title>
        <meta
          name="description"
          content="Trial for nextjs project. Creating a blog site"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default Homepage;
