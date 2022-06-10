import {
  Header,
  Home,
  WhoMe,
  IDo,
  INeed,
  MyStory,
  Feedback,
  ReachMe,
} from "./components";
function App() {
  return (
    <div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <Header />
      <Home />
      <WhoMe />
      <IDo />
      <INeed />
      <MyStory />
      <Feedback />
      <ReachMe />
    </div>
  );
}

export default App;
