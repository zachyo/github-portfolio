import useFetch from "../../utilities/useFetch";

import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner.component";
import "./repo-info.scss";

const RepoInfo = () => {
  const { id } = useParams();
  const url = `https://api.github.com/repos/zachyo/${id}/contents`;
  const { loading, error, data } = useFetch(url);

  const repoList = data?.map((each) => {
    return each ? (
      <div className="" key={each.sha}>
        <p>Name: {each.name}</p>
        <a href={each.html_url}>View file on github</a>
      </div>
    ) : (
      <h1>There are no files in this repository</h1>
    );
  });

  return (
    <div className="repo-info">
      <h1>Contents of {id} repository</h1>
      {error ? (
        <>Failed to fetch. Kindly check your internet connection</>
      ) : (
        <></>
      )}
      {loading ? <Spinner /> : <>{repoList}</>}
    </div>
  );
};

export default RepoInfo;
