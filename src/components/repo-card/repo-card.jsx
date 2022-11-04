import { Link } from "react-router-dom";

import "./repo-card.scss";

const RepoCard = ({ repo }) => {
  const { color, source } = repo;
  const name = `${repo.name}`;
  return (
    <div className="repo-card " style={{ backgroundColor: color }}>
      <img src={source} alt="" />
      <p>{name}</p>
      <Link to={`${name}`} >View Repo &rarr;</Link>
      {/* <h1>{name}</h1> */}
    </div>
  );
};

export default RepoCard;
