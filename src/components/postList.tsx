import PostItem, { PostItemProps } from "./postItem";

interface PostListProps {
  posts: PostItemProps[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="flex flex-col w-full space-y-5 items-center py-10 px-5">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          author={post.author}
          body={post.body}
          title={post.title}
          id={post.id}
        />
      ))}
    </div>
  );
};
export default PostList;
