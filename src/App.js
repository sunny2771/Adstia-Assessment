import { lazy } from "react";
import "./App.css";
import targetImg from "./Images/target.png";
import customizedImg from "./Images/customized.webp";
import medalImg from "./Images/medal.png";
import callCenterImg from "./Images/callCenter.png";
import qualityImg from "./Images/quality.png";

const Cards = lazy(() => import("./components/Cards"));

function App() {
  return (
    <>
      <div className="container">
        <section className="left">
          <div className="top">
            <h1 className="heading">Why the industry chooses clickdee?</h1>
            <p className="left_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel
              nemo ipsum. Delectus voluptas nemo pariatur facere. Suscipit,
              corporis! Et officiis incidunt, optio perspiciatis adipisci
              commodi architecto voluptatum totam vel ex numquam aut animi!
            </p>
          </div>

          <div className="bottom">
            <Cards showcard={true} background="white" />

            <Cards
              image={customizedImg}
              headings="Customised Campaigns"
              para="Lorem ipsum dolor sit amet, Hic aspernatur
                explicabo maiores consequatur quasi!"
            />
          </div>
        </section>
        <section className="right">
          <div className="carousel">
            <div className="right_top">
              <Cards
                image={targetImg}
                headings="Choose your local targeting"
                para="Lorem ipsum dolor sit amet, Hic aspernatur
                explicabo maiores consequatur quasi!"
              />
              <Cards
                background="white"
                image={medalImg}
                headings="Track your conversion"
                para="Lorem ipsum dolor sit amet, Hic aspernatur
                explicabo maiores consequatur quasi!"
              />
            </div>

            <div className="mobile_carousel">
              <Cards
                image={customizedImg}
                headings="Customised Campaigns"
                para="Lorem ipsum dolor sit amet, Hic aspernatur
                explicabo maiores consequatur quasi!"
              />
            </div>

            <div className="right_bottom">
              <Cards
                background="white"
                image={callCenterImg}
                headings="Get dedicated support team"
                para="Lorem ipsum dolor sit amet, Hic aspernatur
                explicabo maiores consequatur quasi!"
              />
              <Cards
                image={qualityImg}
                headings="Quality assurance"
                para="Lorem ipsum dolor sit amet, Hic aspernatur
                explicabo maiores consequatur quasi!"
              />
            </div>
          </div>
        </section>

        <section className="work">
          <p>Work Together</p>
          <h1>Let us all work together</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            animi! Non nulla nostrum delectus unde nesciunt perferendis aliquid,
            nihil amet omnis sapiente modi dolor sint adipisci facilis
            reiciendis ut officiis voluptatem provident iste ad officia.
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
