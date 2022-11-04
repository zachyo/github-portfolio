import { useParams } from "react-router-dom";

const RepoInfo = () => {
  const {id} = useParams();
  return <div className="repo-info">{id}</div>;
};

export default RepoInfo;
