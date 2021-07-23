import { withUrqlClient } from "next-urql";
import NavBar from "../components/NavBar";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [{ data }] = usePostsQuery();

  let body = null;

  if (data === undefined || !data) {
    body = <div>Loading...</div>;
  } else if (data) {
    body = data.posts.map((post) => {
      return <div key={post.id}>{post.title}</div>;
    });
  }

  return (
    <>
      <NavBar />
      <div>Hello World!</div>
      {body}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
