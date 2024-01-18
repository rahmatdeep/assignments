/* eslint-disable react/prop-types */
import "./ProfileComponent.css";

export default function ProfileComponent({
  name,
  age,
  location,
  photoUrl,
  followers,
  likes,
  photos,
}) {
  return (
    <>
      <div className="profile--wrapper">
        <div className="profile">
          <div className="profile--background">
            <div className="profile--picture">
              <img src={photoUrl} alt="pfp" />
            </div>
          </div>
          <div className="profile--info-wrapper">
            <h1>
              {name}
              <span>{age}</span>
            </h1>
            <p>{location}</p>
          </div>
          <hr />
          <div className="profile--stats">
            <div className="profile--stat-wrapper">
              <h1>{followers}</h1>
              <p>Followers</p>
            </div>
            <div className="profile--stat-wrapper">
              <h1>{likes}</h1>
              <p>Likes</p>
            </div>
            <div className="profile--stat-wrapper">
              <h1>{photos}</h1>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
