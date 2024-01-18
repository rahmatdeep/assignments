import { useState } from "react";
import "./GithubProfile.css";
import { useEffect } from "react";

export default function GitHubProfile() {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/rahmatdeep")
      .then((res) => {
        if (!res.ok) {
          throw new console.error("Response was not Ok");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setProfileData(data);
      });
  }, []);
  console.log(profileData);
  return (
    <div className="wrapper">
      <img src={profileData.avatar_url} alt="" />
      <h1>{profileData.login}</h1>
      <div className="stats">
        <div>
          <h1>{profileData.followers}</h1>
          <h1>followers</h1>
        </div>

        <div>
          <h1>{profileData.following}</h1>
          <h1>following</h1>
        </div>

        <div>
          <h1>{profileData.public_repos}</h1>
          <h1>Public repos</h1>
        </div>
      </div>
    </div>
  );
}
