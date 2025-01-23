import "./App.css";
import Header from "./components/Header/Header";
import CommunityPage from "./pages/Community/CommunityPage";

function App() {
  return (
    <div className="dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-800">
        <Header />
        <CommunityPage />
    </div>
  );
}

export default App;
