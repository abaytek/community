import PostList from "./PostList";

const PostListContainer: React.FC<{ posts: any[] }> = ({ posts }) => (
  <div className="flex-1 md:flex-[0.5] m-2 bg-white dark:bg-slate-950 snap-end dark:text-white mb-4 rounded-lg p-4 scrollbar-hidden overflow-y-scroll h-fit">
    <h2 className="text-lg font-semibold mb-4">Community Posts</h2>
    <PostList posts={posts} />
  </div>
);

export default PostListContainer