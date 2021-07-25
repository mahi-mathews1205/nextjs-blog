import PostContent from "../../components/posts/post-details/post-content";
import Head from "next/head";
import { getPostData, getPostFiles } from "../../lib/post-util";

const SinglePostPage = (props) => {
  return (
    <>
      <Head>
        <title>{props?.post?.title}</title>
        <meta name="description" content={props?.post?.excerpt} />
      </Head>
      <PostContent post={props?.post} />
    </>
  );
};
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return { props: { post: postData } };
}
export function getStaticPaths() {
  const postList = getPostFiles();
  const slugs = postList?.map((post) => post?.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
export default SinglePostPage;
