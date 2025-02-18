
import Navbar from '../components/Navbar';
function Projects() {
    return (
      <>
      <Navbar/>
      <main id="main-content" class="page-body" tabindex="-1">
        <svg
          style={{
            position: "absolute",
            top: "-900px",
            left: "-900px",
            clip: "rect(0,0,0,0)",
          }}
        >
          <filter id="duotone_filter">
            <feColorMatrix
              type="matrix"
              result="grayscale"
              values="1 0 0 0 0
      1 0 0 0 0
      1 0 0 0 0
      0 0 0 1 0"
            ></feColorMatrix>
            <feComponentTransfer
              color-interpolation-filters="sRGB"
              result="duotone"
            >
              <feFuncR
                type="table"
                tableValues="0.6196078431372549 1.0745098039215686"
              ></feFuncR>
              <feFuncG
                type="table"
                tableValues="0.2784313725490196 0.9529411764705882"
              ></feFuncG>
              <feFuncB
                type="table"
                tableValues="-0.20784313725490197 0.7803921568627451"
              ></feFuncB>
              <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer>
          </filter>
        </svg>
        <div class="section is-onscreen">
          <div class="article-heading">
            <h1 class="article-heading__title t-heading t-medium:s t-bigger:m t-biggest:l">
              <span>
                My Projects<span class="dot">.</span>
              </span>
            </h1>
          </div>
          <p class="page-header__lede t-primary lh-loose t-body:s t-sublede:m t-lede:l reveal-content">
            Here you'll find my projects on topics ranging from coding and the web
            industry, to linguistics and natural language processing – there's
            also{" "}
          </p>
          <div class="article-list reveal-content">
            <div
              class="article-listing article-list__item js-themepeep"
              data-theme='{"bg":"#f9f3f3","line":"#5c1623","fill":"#e1667c","text":"#0c1430","subtext":"#4261b5","duo":"#b7c6f0"}'
            >
              <span class="article-listing__date">Jan 31 2022</span>
              <div class="article-listing__content flow">
                <h3 class="article-listing__title t-heading t-lede:s t-medium:m t-medium:l">
                  <a
                    href="/wrote-about/2023-wrapped/"
                    class="article-listing__link"
                  >
                    Robo Advisor
                  </a>
                </h3>
                <p>
                  A web app that creates personalized portfolios using AI and
                  modern finance models.
                </p>
              </div>
            </div>
            <div
              class="article-listing article-list__item js-themepeep"
              data-theme='{"bg":"#f9f3f3","line":"#5c1623","fill":"#e1667c","text":"#0c1430","subtext":"#4261b5","duo":"#b7c6f0"}'
            >
              <span class="article-listing__date">Jan 31 2022</span>
              <div class="article-listing__content flow">
                <h3 class="article-listing__title t-heading t-lede:s t-medium:m t-medium:l">
                  <a
                    href="/wrote-about/2023-wrapped/"
                    class="article-listing__link"
                  >
                    SDI BIT
                  </a>
                </h3>
                <p>
                  A web app that simplifies online learning and testing for
                  college students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main></>

    );
  }
  
  export default Projects;
  