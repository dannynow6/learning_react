import "./App.css";
import { useState, useEffect } from "react";

function GithubUser ({ name, location, pRepos, bio, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <img height={150} src={avatar} alt={name}/>
      <h5>{bio}</h5>
      <p>Located in {location}</p>
      <p>Number of Public Repos: {pRepos}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/dannynow6`).then((response) => response.json()).then(setData);
  }, []);
  if(data) 
    return <GithubUser name={data.name} location={data.location} pRepos={data.public_repos} bio={data.bio} avatar={data.avatar_url}/>;
  return <h1>Data</h1>;
}


export default App;

