const Explore = () => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Explore</h2>
      <ul className="space-y-2">
        <li className="hover:text-indigo-400 cursor-pointer">
          # Trending Topics
        </li>
        <li className="hover:text-indigo-400 cursor-pointer">
          # Recent Discussions
        </li>
        <li className="hover:text-indigo-400 cursor-pointer"># Categories</li>
        <li className="hover:text-indigo-400 cursor-pointer">
         # Top Contributors
        </li>
      </ul>
    </>
  );
};

export default Explore;
