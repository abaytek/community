import { FaX } from "react-icons/fa6";
import PostForm from "../PostForm/PostForm";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (post: any) => void;
}> = ({ isOpen, onClose, onAddPost }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
      <div className="bg-white dark:bg-slate-900 dark:text-white rounded-sm p-6 w-96 relative">
        <h2 className="text-base font-semibold mb-4">Create a New Post</h2>
        <PostForm
          onAddPost={(newPost) => {
            onAddPost(newPost);
            onClose();
          }}
        />
        <button
          onClick={onClose}
          className="mt-4 text-sm absolute top-0 right-4 text-gray-500 hover:underline"
        >
          <FaX className="font-extrabold" />
        </button>
      </div>
    </div>
  );
};

export default Modal;