import React, { useState } from "react";
import { mockPosts } from "../../mocks/mockData";
import Explore from "@/components/ui/explore";
import { FaEdit } from "react-icons/fa";
import Header from "@/components/Header/Header";
import PostListContainer from "@/components/PostList/PostListContainer";
import UserInfo from "@/components/UserInfo/UserInfo";
import Modal from "@/components/Modal/Modal";


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
    <div className="dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-800">
      <Header />
      <div className="bg-gray-100 dark:bg-transparent">
        <div className="pt-8 min-h-screen max-w-5xl mx-auto flex md:flex-row flex-col-reverse gap-8">
          <div className="bg-white dark:bg-slate-900 dark:text-white rounded-lg p-4 hidden md:block flex-[0.25] h-full">
            <Explore />
          </div>

          <PostListContainer posts={posts} />

          <div className="flex-[0.25] m-2 bg-white dark:bg-slate-900 dark:text-white rounded-lg p-4 h-full">
            <UserInfo />
            <button
              onClick={toggleModal}
              className="w-full bg-blue-600 font-bold text-white py-2 px-4 flex items-center gap-2 justify-center hover:bg-indigo-700"
            >
              <FaEdit />
              Create post
            </button>
            <Modal
              isOpen={isModalOpen}
              onClose={toggleModal}
              onAddPost={addPost}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
