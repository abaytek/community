import { CONSTANTS } from "@/utilities/constants";

export const mockPosts = [
  {
    id: 1,
    authorName: CONSTANTS.DUMMY_USER_NAME,
    authorImage: CONSTANTS.DUMMY_USER_IMAGE,
    date: "January 22, 2025",
    title: "Welcome to the Community!",
    body: "This is the first post in our community. Feel free to share your thoughts!",
    image: CONSTANTS.DUMMY_POST_IMAGE,
    comments: [
      {
        id: 11,
        body: "Great post!",
        replies: [
          {
            id: 111,
            body: "I agree!",
            replies: [],
          },
        ],
      },
    ],
  },
];
