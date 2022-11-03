import useFetch from "../useFetch2";

const Repos = () => {
  const url = `https://api.github.com/users/zachyo/repos`;

  const { loading, error, data } = useFetch(url);
//   console.log(data);

  if (!loading && error) {
    return <>Error</>;
  }
  return (
    <div className="repos">
      Repos pagination
      {data.map((repo) => {
        return <div key={repo.id}>{repo.name}</div>;
      })}
    </div>
  );
};

export default Repos;
