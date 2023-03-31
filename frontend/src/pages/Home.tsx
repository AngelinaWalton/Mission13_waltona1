import react from "react";
import styles from "../Home.module.css";

function Home(props: any) {
  return (
    <>
      <div
        className="row"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        {/* col align-self-center text-start */}
        <div
          className="text-center"
          style={{ padding: "60px" }}
        >
          {/* <h1 className={styles.h1}>{props.heading}</h1> */}
          <h1>Welcome To Joel Hiltons Website</h1>
          <br></br>
          <h5>
            We are going to learn about the movies he likes. Go ahead and
            explore the Website to learn more about his podcasts and different
            movies!
          </h5>
        </div>
        <div className="mx-auto d-block">
          <img
            src="./JoelHiltonHeadshot.jpg"
            className="mx-auto d-block"
            alt="Joel Hilton"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
