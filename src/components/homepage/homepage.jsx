import useFetch from "../useFetch";

const Homepage = () => {
  const url = `https://api.github.com/users/zachyo`;

  const { loading, error, data } = useFetch(url);
  console.log(data);

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <div className="home">
      {loading ? <>Loading...</> : <>Portfolio</>}
      {!loading && (
        <>
        <img src={data.avatar_url} alt='profile' />
          <h1>{data.name}</h1>
          <p>{data.followers} Followers</p>

          <p>{data.following} Following</p>
          <section className="repos">
            {/* Section for all repos fetched */}
          </section>
        </>
      )}
      <div className="profile-img"></div>
    </div>
    // <div className="">Homepage</div>
  );
};

export default Homepage;
