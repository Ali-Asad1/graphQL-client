import Layout from "./components/layouts/layout";
import PostList from "./components/postList";
import Loader from "./components/ui/loader";
import { usePosts } from "./hooks/usePosts";

const App = () => {
  const { data, error, isError, isLoading } = usePosts();

  return (
    <Layout>
      {isLoading ? (
        <div className="flex w-full justify-center items-center">
          <Loader />
        </div>
      ) : isError ? (
        <p>{error}</p>
      ) : (
        <PostList posts={data} />
      )}
    </Layout>
  );
};
export default App;
