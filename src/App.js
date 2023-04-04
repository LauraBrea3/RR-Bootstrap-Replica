import "./App.css";
import Background from "./components/Background";
import TopBar from "./components/TopBar";
import StoreListings from "./components/StoreListing";

function App() {
  return (
    <div>
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
