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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/dannynow6`
      )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
    
  if (loading) return <h1>Loading...</h1>;
  if (error) 
    return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    <GithubUser 
      name={data.name} 
      location={data.location} 
      pRepos={data.public_repos} 
      bio={data.bio} 
      avatar={data.avatar_url} 
    />
  );
    
}


export default App;

