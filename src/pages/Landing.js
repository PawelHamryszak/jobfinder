import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            find <span>your</span> job
          </h1>
          <p>
            I'm baby sustainable food truck brunch organic portland 3 wolf moon.
            Raw denim blog cred kale chips retro craft beer master cleanse
            coloring book twee stumptown glossier hashtag jawn green juice. DSA
            jean shorts kickstarter,
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
