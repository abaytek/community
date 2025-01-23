import React, { useState } from "react";
import { mockPosts } from "../../mocks/mockData";
import PostForm from "@/components/PostForm/PostForm";
import PostList from "@/components/PostList/PostList";
import Explore from "@/components/ui/explore";
import { CONSTANTS } from "@/utilities/constants";
import { FaEdit } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (newPost: any) => {
    setPosts([newPost, ...posts]);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-gray-100 dark:bg-transparent">

    <div className="pt-8 min-h-screen max-w-5xl mx-auto flex md:flex-row flex-col-reverse gap-8">
      <div className="bg-white dark:bg-slate-900 dark:text-white rounded-lg p-4 hidden md:block flex-[0.25] h-full">
        <Explore />
      </div>

      <div className="flex-1 md:flex-[0.5] m-2 bg-white dark:bg-slate-950 snap-end dark:text-white mb-4 rounded-lg p-4 scrollbar-hidden overflow-y-scroll  h-fit">
        <h2 className="text-lg font-semibold mb-4">Community Posts</h2>
        <PostList posts={posts} />
      </div>

      <div className="flex-[0.25] m-2 bg-white dark:bg-slate-900 dark:text-white rounded-lg p-4 h-full">
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="flex items-center flex-col">
            <img
              src={CONSTANTS.DUMMY_BG_IMAGE}
              alt="bg"
              className="rounded-md"
            />
            ss
            <div className="shadow-lg p-1 -mt-12 z-10 bg-white">
              <img
                src={CONSTANTS.DUMMY_USER_IMAGE}
                alt="bg"
                className="rounded-md w-12 h-12"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold lato-bold text-sm">
              {CONSTANTS.DUMMY_USER_NAME}
            </h3>
            <p className="text-xs text-gray-400">@abebebeso</p>
          </div>
        </div>
        <button
          onClick={toggleModal}
          className="w-full bg-blue-600 font-bold text-white py-2 px-4 flex items-center gap-2 justify-center  hover:bg-indigo-700 "
        >
          <FaEdit />
          Create post
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
            <div className="bg-white dark:bg-slate-900 dark:text-white rounded-sm p-6 w-96 relative">
              <h2 className="text-base font-semibold mb-4">Create a New Post</h2>
              <PostForm
                onAddPost={(newPost: any) => {
                  addPost(newPost);
                  toggleModal();
                }}
              />
              <button
                onClick={toggleModal}
                className="mt-4 text-sm absolute top-0 right-4 text-gray-500 hover:underline"
              >
                <FaX className="font-extrabold" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>

  );
};

export default CommunityPage;
