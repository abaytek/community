
# Community Front Page (React + Typescript)

This project is a **React application** bootstrapped with **Vite**, designed with scalability and modularity in mind. Below is the folder structure, description, and steps to run the project.

---

## Folder Structure

```
src/
├── assets/
├── components/
├── hooks/
├── libs/
├── mocks/
├── pages/
├── services/
├── store/
├── types/
├── utilities/
└── App.tsx
```

---

### Folder Descriptions

- **`assets/`**  
  Contains static files such as images, fonts, and other assets.  
  Example: `logo.png`, `background.jpg`.

- **`components/`**  
  Houses reusable UI components for modularity.  
  Example: `Button`, `Header`, `Footer`.

- **`hooks/`**  
  Stores custom React hooks for reusable logic.  
  Example: `useFetch`, `useAuth`.

- **`libs/`**  
  Includes third-party integrations, utilities, or configurations.  
  Example: Axios instances, Firebase setup.

- **`mocks/`**  
  Contains mock data or API responses for testing/development.  
  Example: `mockPosts.json`, `mockUsers.js`.

- **`pages/`**  
  Main views/screens of the application, mapped to routes.  
  Example: `HomePage`, `LoginPage`.

- **`services/`**  
  Centralized API service functions for backend requests.  
  Example: `postService.ts`, `userService.ts`.

- **`store/`**  
  Manages global state using Redux, Zustand, or Context API.  
  Example: `authSlice.ts`, `postStore.ts`.

- **`types/`**  
  Defines TypeScript interfaces and types for type safety.  
  Example: `User.ts`, `Post.ts`.

- **`utilities/`**  
  Utility functions/helpers for cleaner, reusable code.  
  Example: `formatDate.ts`, `debounce.ts`.

---

## How to Run the Project

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- A package manager such as `npm` or `yarn`.

### Steps to Run

1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**  
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in Browser**  
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for Production**  
   ```bash
   npm run build
   # or
   yarn build
   ```

6. **Preview the Production Build**  
   ```bash
   npm run preview
   # or
   yarn preview
   ```

---

## Example Folder Hierarchy

```
src/
├── assets/
│   └── images/
│       └── logo.png
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.css
│   └── Header/
│       ├── Header.tsx
│       └── Header.css
├── hooks/
│   └── useTheme.ts
├── libs/
│   └── axiosInstance.ts
├── mocks/
│   └── mockPosts.json
├── pages/
│   ├── HomePage/
│   │   ├── HomePage.tsx
│   │   └── HomePage.css
│   └── LoginPage/
│       ├── LoginPage.tsx
│       └── LoginPage.css
├── services/
│   └── postService.ts
├── store/
│   └── authSlice.ts
├── types/
│   └── Post.ts
├── utilities/
│   └── formatDate.ts
└── App.tsx
```

---
😊