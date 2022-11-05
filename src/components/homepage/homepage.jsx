import useFetch from "../useFetch";
import "./homepage.scss";
import { Link } from "react-router-dom";
import circle from "../../assets/small-circle.png";
import square from "../../assets/square.png";
import triangle from "../../assets/triangle.png";
import close from "../../assets/close.png";
import Spinner from "../spinner/spinner.component";
// import background from "../../assets/grid2.png";

const Homepage = () => {
  const url = `https://api.github.com/users/zachyo`;

  const { loading, error, data } = useFetch(url);
  // console.log(data);

  if (loading) {
    return <Spinner/>;
  }

  // console.log(loading)
  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <div>
      {!loading && (
        <>
          <div className="homepage">
            {/* <img className='background' src={background} alt='background' /> */}
            <div className="header">
              <div className="top-layer">
                <div className="">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="shapes">
                  <img src={circle} alt="circle" />
                  <img src={square} alt="circle" />
                  <img src={close} alt="circle" />
                  <img src={triangle} alt="circle" />
                </div>
              </div>
              <div className="layer1">
                <div className=" header header-text">
                  <div className="one">
                    <h1>PORT</h1>
                    <h2>FOLIO</h2>
                  </div>
                  <div className="two">
                    <h1>PORT</h1>
                    <h2>FOLIO</h2>
                  </div>
                </div>

                <img src="" alt="" />
              </div>
              <div className="layer2">
                <div className="" style={{ textAlign: "left" }}>
                  <h1>{data?.name?.toUpperCase()}</h1>
                  <h2>FRONTEND ENGINEER</h2>
                </div>
                <div className="" style={{ textAlign: "right" }}>
                  <h1>2022</h1>
                  <h1>GITHUB PORTFOLIO</h1>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="details">
                <h1>Name : {data?.name}</h1>
                <h2>Description : {data?.bio}</h2>
                <h3>
                  <span style={{ marginRight: "30px" }}>
                    {data?.followers} Followers
                  </span>
                  <span>{data?.following} Following</span>
                </h3>
                <h3>Repositories : {data?.public_repos}</h3>
                <h3>Location : {data?.location}</h3>
                <Link to="repos">View Repos</Link>
              </div>
              <div className="img">
                <img src={data?.avatar_url} alt="profile" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    // <div className="">Homepage</div>
  );
  // return (<div>jkkgk</div>)
};

export default Homepage;

// {/*
//             <h1>{data.name}</h1>
//             <p>{data.followers} Followers</p>

//             <p>{data.following} Following</p>
//             <section className="repos">
//               {/* Section for all repos fetched */}
//             </section> */}
