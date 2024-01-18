import "./App.css";
import BackgroundChanger from "./components/BackgroundChanger";
import GitHubProfile from "./components/GithubProfile";
import ParaGenerator from "./components/ParaGenerator";
import ProfileComponent from "./components/ProfileComponent";

function App() {
  return (
    <>
      {/* <ProfileComponent
        name="Rahmat"
        age={30}
        location="Here"
        likes="80K"
        followers="30K"
        photos="120"
        photoUrl={
          "data:image/png;base64,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"
        }
      /> */}
      {/* <BackgroundChanger /> */}
      {/* <ParaGenerator /> */}
      {/* <GitHubProfile /> */}
    </>
  );
}

export default App;