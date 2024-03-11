interface AuthorType {
  id: string;
  username: string;
}

export interface PostItemProps {
  id: string;
  title: string;
  body: string;
  author: AuthorType;
}

const PostItem: React.FC<PostItemProps> = ({ author, body, title }) => {
  return (
    <div className="max-w-[590px] min-w-[250px] w-full bg-slate-800 rounded-xl shadow-md p-4 hover:bg-slate-900 transition-colors">
      <p className="text-xl font-bold">{title}</p>
      <p>{body}</p>
      <p className="text-xs text-slate-400 mt-5">
        Author: <span className="font-bold">{author.username}</span>
      </p>
    </div>
  );
};
export default PostItem;
