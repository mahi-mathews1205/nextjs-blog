import AllPosts from "../../components/posts/all-posts";
import Head from "next/head";
import { getAllPosts } from "../../lib/post-util";

const PostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="List of all posts for nextjs project."
        />
      </Head>
      <AllPosts posts={props?.posts} />
    </>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default PostsPage;
