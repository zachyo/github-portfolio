import useFetch from "../useFetch";
import { useState } from "react";
import RepoCard from "../repo-card/repo-card";
import Spinner from "../spinner/spinner.component";

import "./repos.scss";
import { searchFilter } from "../../utilities/searchFilter";

const Repos = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(undefined);

  const url = `https://api.github.com/users/zachyo/repos`;

  const { loading, error, data } = useFetch(url);

  //searching system
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  let newData = data;
  if (search) {
    newData = searchFilter(search, data);
    console.log(newData);
  }

  //paging system
  const PER_PAGE = 4;
  const total = newData?.length;
  const pages = Math.ceil(total / PER_PAGE);
  console.log(data);
  //   console.log(pages,total);
  const skip = page * PER_PAGE - PER_PAGE;
  //   console.log(skip, total);
  if (loading) {
    return <Spinner />;
  }

  if (!loading && error) {
    return <>Error</>;
  }
  return (
    <div className="repos">
      <h1>Repositories</h1>
      <input
        type="text"
        value={search}
        name="search"
        placeholder="Search..."
        onChange={handleChange}
      />
      <div className="repo-cards">
        {newData?.slice(skip, skip + PER_PAGE).map((repo, index) => {
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
      {/* <Outlet/> */}
    </div>
  );
};

export default Repos;
