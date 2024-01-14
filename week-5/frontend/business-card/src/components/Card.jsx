/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";

export default function Card({
  name,
  description,
  socialMedia,
  interests,

}) {
  return (
    <>
      <div className="card">
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h2>Interests</h2>
        <ul>
          {interests.map((interest) => (
            <li key={uuidv4()}>{interest}</li>
          ))}
        </ul>
        <div className="card--buttons">
          {socialMedia.map((social) => (
            <button key={uuidv4()}>{social}</button>
          ))}
        </div>
      </div>
    </>
  );
}
