import useFetch from "../useFetch2";
import { useState } from "react";
import RepoCard from "../repo-card/repo-card";

import "./repos.scss";

const Repos = () => {
  const [page, setPage] = useState(1);

  const url = `https://api.github.com/users/zachyo/repos`;

  const { loading, error, data } = useFetch(url);

  const PER_PAGE = 4;
  const total = data.length;
  const pages = Math.ceil(total / PER_PAGE);
  console.log(data);
  //   console.log(pages,total);

  const skip = page * PER_PAGE - PER_PAGE;
  //   console.log(skip, total);
  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }
  return (
    <div className="repos">
      <h1>Repositories</h1>
      <div className="repo-cards">
        {data.slice(skip, skip + PER_PAGE).map((repo, index) => {
          return <RepoCard repo={repo} key={repo.id} />;
        })}
      </div>

      <h3 className="pagination">
        Pages: {page} of {pages}
      </h3>
      <div className="page-btns">
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
        {Array.from({ length: pages }, (_, index) => index + 1).map((each) => (
          <span
            onClick={() => setPage(each)}
            key={each}
            style={page === each ? { backgroundColor: "#011ff3" } : {}}
          ></span>
        ))}
        <button
          disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Repos;
