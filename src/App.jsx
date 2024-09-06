import "./App.css";
import "./media.css";
import "./index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import about from "./img/about1.png";
import service1 from "./img/serves-1.png";
import service2 from "./img/serves-2.png";
import service3 from "./img/serves-3.png";
import service4 from "./img/serves-4.png";
import service5 from "./img/serves-5.png";
import arrow from "./img/up-right-arrow.png";
import home1 from "./img/home-1.png";
import home2 from "./img/home-2.png";
import home3 from "./img/home-3.png";
import home4 from "./img/home-4.png";
import home5 from "./img/home-5.png";
import home6 from "./img/home-6.png";
import home7 from "./img/home-7.png";
import home8 from "./img/home-8.png";
import about1 from "./img/about1.png";
import logo2 from "./img/FAVICON (1).jpg";
import clint1 from "./img/clint-1.png";
import logosf from "./img/logs.png";
//
const images = [
         
  {
    src:home1
  },
  {
    src:home2
  },
  {
    src:home3
  },
  {
    src:home4
  },
  {
    src:home5
  },
  {
    src:home6
  }





        // "https://vaarivana.com/wp-content/uploads/2023/05/Unveiling_the_Splendor.jpg.webp",
        // "https://vaarivana.com/wp-content/uploads/2023/05/Unveiling_the_Splendor.jpg.webp",
        // "https://vaarivana.com/wp-content/uploads/2023/05/Unveiling_the_Splendor.jpg.webp",
        // "https://vaarivana.com/wp-content/uploads/2023/05/Unveiling_the_Splendor.jpg.webp",
        // "https://vaarivana.com/wp-content/uploads/2023/05/Unveiling_the_Splendor.jpg.webp",
        // "https://vaarivana.com/wp-content/uploads/2023/05/Unveiling_the_Splendor.jpg.webp"
    ];

function App() {
  return (
    <>
      {/* Header */}
      <div className="background">
        <div className="header-main-two">
          <div className="container header-container">
            <div className="header-content">
              <div className="header-logo">
                <img src={logosf} alt="Logo" />
              </div>
              <div className="header-nav">
                <ul className="nav-list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                </ul>
              </div>
              <div className="header-button">
                <button>Contact Us</button>
              </div>
            </div>
          </div>
          <div className="container home-main">
            <div className="home-page-text">
              <div className="home-text-one">
                <p>ELEGANT DWELLING MAKEOVER</p>
                <h1>
                  Artistry in Renovation <br />
                  Making Your Vision a Reality
                </h1>
              </div>
            </div>
          </div>
          {/* End Header */}
        </div>
      </div>

      {/* Section 2 */}
      <section className="container service-main-section">
        <div className="service-section mt-5">
          <div className="service-heading text-center">
            <h2>Services</h2>
            <p>
              Our goal here at Portrait Renovation, Inc is to look after our
              customers in all aspects and provide the best quality in servicing
              our customers with workmanship, material quality, seasoned
              installers, and deadlines to keep projects on schedule.
            </p>
            <p>
              We also provide a schedule from start with all scope of work. This
              is crucial in keeping the project moving without delay. It also
              helps ensure that all materials needed are onsite ahead of the
              installers.
            </p>
          </div>
          <div className="service-img-detail-main">
            {/* Service 1 */}
            <div className="service-image-detail-1 d-flex justify-content-between flex-wrap">
              <div className="row">
                <div className="service-details my-auto col-lg-7 col-12">
                  <h1>Living Room Remodeling</h1>
                  <p>
                    This is where family memories are made. It should feel open
                    and cozy with a flair of your preferred design style.
                  </p>
                  <br />
                  <a href="#" className="read-more">
                    Read more &nbsp;
                    <img src={arrow} className="img-fluid" alt="" />
                    <div className="underline" />
                  </a>
                </div>
                <div className="servise-img col-lg-5 col-12">
                  <img src={service1} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            {/* Service 2 */}
            <div className="service-image-detail-2 d-flex justify-content-between flex-wrap">
              <div className="row">
                <div className="servise-img my-auto col-lg-5 col-12">
                  <img src={service2} className="img-fluid" alt="" />
                </div>
                <div className="service-details my-auto col-lg-7 col-12">
                  <h1>Outdoor Living</h1>
                  <p>
                    We can build any design you have, or assist you with a
                    design that will make your outdoor space special. Some
                    features may include an outdoor kitchen, fireplace or fire
                    pit, ceiling fans, and specialty lighting, just to mention a
                    few.
                  </p>
                  <br />
                  <a href="#" className="read-more">
                    Read more &nbsp;
                    <img src={arrow} className="img-fluid" alt="" />
                    <div className="underline" />
                  </a>
                </div>
              </div>
            </div>
            {/* Service 3 */}
            <div className="service-image-detail-1 d-flex justify-content-between flex-wrap">
              <div className="row">
                <div className="service-details my-auto col-lg-7 col-12">
                  <h1>Bathroom Remodeling</h1>
                  <p>
                    We can get very creative with the layout of any bathroom.
                    Big or small, it can give you a sense of ease when you walk
                    into it. The perfect shower surrounds or space-saving
                    cabinets with independent mirrors and dimmable lighting
                    allows you to wake from your slumber at your pace.
                  </p>
                  <br />
                  <a href="#" className="read-more">
                    Read more &nbsp;
                    <img src={arrow} className="img-fluid" alt="" />
                    <div className="underline" />
                  </a>
                </div>
                <div className="servise-img col-lg-5 col-12">
                  <img src={service3} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            {/* Service 4 */}
            <div className="service-image-detail-2 d-flex justify-content-between flex-wrap">
              <div className="row">
                <div className="servise-img my-auto col-lg-5 col-12">
                  <img src={service4} className="img-fluid" alt="" />
                </div>
                <div className="servise-ditels my-auto col-lg-7 col-12">
                  <h1>Custome built homes</h1>
                  <p>
                    Your custom built home says it all. We can build Your custom
                    home with plan you provide or I have a source for
                    predesigend plans that cost a fraction of the cost to hire
                    an architect. Most plans are engineered with an official
                    stamp required for permitting. <br />
                    Together you can make adjustments in any area of the home
                    you like without additional design fees. Our company is
                    listed as a preferred build at First National bank where you
                    can get the construction funding then refi into a long-term
                    loan.
                  </p>
                  <br />
                  <a href="#" className="read-more">
                    Read more &nbsp;
                    <img src={arrow} className="img-fluid" alt="" />
                    <div className="underline" />
                  </a>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="servis-imge-ditel-1 d-flex justify-content-between flex-wrap">
              <div className="row">
                <div className="servise-ditels my-auto col-lg-7 col-12">
                  <h1>Room additions</h1>
                  <p>
                    We can assist with the plans in this scenario an well. We
                    can design the Whole addition including engineering for a
                    fraction of the costs of an independent architect.
                  </p>
                  <br />
                  <a href="#" className="read-more">
                    Read more &nbsp;
                    <img src={arrow} className="img-fluid" alt="" />
                    <div className="underline" />
                  </a>
                </div>
                <div className="servise-img col-lg-5 col-12">
                  <img src={service5} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* serves section end */}
      {/* section-3 */}

     
        <div className="cross-container">
            <div className="cross-background"></div>
            <div className="cross-text" style={{ marginLeft: '50px' }}>
                We also do the smaller projects and will assist you with ideas to help you to stay on your budget.
            </div>
            <div className="cross-image-grid">
                <img className='cross-img'
                    src="https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Image 1"
                />
                <img className='cross-img'
                    src="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Image 2"
                />
                <img className='cross-img'
                    src="https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Image 3"
                />
                <img className='cross-img'
                    src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Image 4"
                />
            </div>
</div>
      
      {/* section-4 */}
      <section className="container elvate-section-main">
        <div className="ditels text-center">
          <h1>Elevate to the next level</h1>
          <p>
            Our team of wxperienced experts ensures an efficient and exceptional
            client experience, <br /> providing trustworthy guidance throughout
            the process.
          </p>
        </div>
        <br />
        <div className="elvate-section-imme-1">
          <div className="row">
            <div className="elvate-main-lender col-lg-6">
              <div className="elvate-imges ">
                <p className="text-white elvate-hading ms-4 pt-3">
                  01 <span className="evate-dec">Discovery call</span>
                </p>
              </div>
              <div className="elvate-pere mt-3">
                <p>
                  Let's connect and explore the unique vision for your
                  renovation
                </p>
              </div>
            </div>
            <div className="elvate-main-lender col-lg-6">
              <div className="elvate-imges">
                <p className="text-white elvate-hading ms-4 pt-3">
                  02 <span className="evate-dec">In-home consultancy</span>
                </p>
              </div>
              <div className="elvate-pere mt-3">
                <p>
                  Let's explore your home together to fully capture your vision
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="elvate-main-lender col-lg-6">
              <div className="elvate-imges-2 ">
                <p className="text-white elvate-hading ms-4 pt-3">
                  03
                  <span className="evate-dec">
                    Scope, selection& <br />
                    estamate
                  </span>
                </p>
              </div>
              <div className="elvate-pere mt-3">
                <p>
                  get instant cost and time estimates for your home remodel or
                  constructiion project.
                </p>
              </div>{" "}
              <br />
            </div>
            <div className="elvate-main-lender col-lg-6">
              <div className="elvate-imges-3">
                <p className="text-white elvate-hading ms-4 pt-3">
                  04{" "}
                  <span className="evate-dec">
                    Project prep&selection <br />
                    procurement
                  </span>
                </p>
              </div>
              <div className="elvate-pere mt-3">
                <p>
                  We handle sourcing and delivering quality materials,so you
                  don't have to worry.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="elvate-main-lender col-lg-6">
              <div className="elvate-imges-4 ">
                <p className="text-white elvate-hading ms-4 pt-3">
                  05 <span className="evate-dec">Construction</span>
                </p>
              </div>
              <div className="elvate-pere mt-3">
                <p>
                  We wnsure a clean,organized space, prioritizing your comfort
                  and delivering superior results.
                </p>
              </div>
              <br />
            </div>
            <div className="elvate-main-lender col-lg-6">
              <div className="elvate-imges-5">
                <p className="text-white elvate-hading ms-4 pt-3">
                  06
                  <span className="evate-dec">
                    Final walkthrough & love your space
                  </span>
                </p>
              </div>
              <div className="elvate-pere mt-3">
                <p>
                  After approving renovations,our artisans restore your home.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="elvate-buuton-main-9 d-flex flex-wrap   col-lg-6">
            <div className="elvate-buuton-2">
              <button>
                <a href="">Schedule discovery call</a>
              </button>
            </div>
          </div>
          <div className="elvate-buuton-main d-flex flex-wrap col-lg-6">
            <div className="elvate-buuton-1">
              <button>
                <a href="">See financing option</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* sectio-5 */}
      <section className="presting-st-main">
        <div className="presting-heding-main">
          <h1 className="text-center">
            Prestigious home <br />
            makeover specialists
          </h1>
          <p></p>
          <p className="text-center">
            These variations emphasize the high recognitionand quality of the
            home renovation services.
          </p>
        </div>
        <div className="main-slider">
          {/* <div className="gallery-container">
            <div className="gallery">
              <img src={home1} alt="Image 1" />
              <img src={home2} alt="Image 2" />
              <img src={home3} alt="Image 3" />
              <img src={home4} alt="Image 4" />
              <img src={home5} alt="Image 5" />
              <img src={home6} alt="Image 6" />
              <img src={home7} alt="Image 7" />
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery">
              <img src={home1} alt="Image 1" />
              <img src={home2} alt="Image 2" />
              <img src={home3} alt="Image 3" />
              <img src={home4} alt="Image 4" />
              <img src={home5} alt="Image 5" />
              <img src={home6} alt="Image 6" />
              <img src={home7} alt="Image 7" />
            </div>
          </div> */}
          <div className="auto-scroll-container">
            <div className="scroll-wrapper">
              <div className="scroll-content">
                {images.map((Item, index) => (
                  <div key={index} className="gallery-item">
                    <img src={Item.src} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </div>
              {/* Cloning the content for smooth scroll */}
            </div> <br />
            <div className="scroll-wrapper">
              <div className="scroll-content">
                {images.map((Item, index) => (
                  <div key={index} className="gallery-item">
                    <img src={Item.src} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </div>
              {/* Cloning the content for smooth scroll */}
              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="elvate-buuton-main-9 d-flex flex-wrap   col-lg-6">
              <div className="elvate-buuton-2">
                <button>
                  <a href="">Schedule discovery call</a>
                </button>
              </div>
            </div>
            <div className="elvate-buuton-main d-flex flex-wrap col-lg-6">
              <div className="elvate-buuton-1">
                <button>
                  <a href="">See financing option</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-6 */}
      <section className="container aboute-start-main">
        <div className="row">
          <div className="aboute-ditels col-lg-6 ">
            <h1>About portrait renovation</h1>
            <p>
              With Terry Deskin at the helm,Portait Renovations was set up with
              the vision of being a home renovation company with a
              difference.Our incredible team of dedicated professionals
              genuinelycares about how your home is going to look and feel and
              iscommitted ti delivering quality results. We believe in making
              home renovations a positive experience for every family and always
              go above and beyond in ensuring your comfort throughout the entire
              process.
            </p>
          </div>
          <div className="aboute-img col-lg-6">
            <div className="imges"></div>
          </div>
        </div>
      </section>
      {/* section-7 */}
      <section className="clint-had-main">
        <div className="heder-bg">
          <div className="clint-heding">
            <h1 className="text-center text-white pt-5">
              Hear from our <br /> satisfird homeoener
            </h1>
            <p className="text-center text-white">
              These revies aim to highlight positive customer experiences and
              build trust with potential clients.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="clint-img-ditel col-lg-4">
                <div className="clint-img d-flex justify-content-lg-center">
                  <img src={clint1} className="  img-fluid" alt="" />
                </div>
                <div className="testimonial-arrows">
                  <button className="arrow-btn">&larr;</button>
                  <button className="arrow-btn">&rarr;</button>
                </div>
              </div>
              <div className="clint-detel  my-auto col-lg-8">
                <div className="ditels-clintes d-flex">
                  <h3 className="text-white">Davis Schleifer</h3>
                  <span className="testimonial-stars">★★★★★</span>
                </div>
                <hr className="lining text-white" />

                <p className="text-white">
                  We recently met Kyle & Kim at a business conference for
                  contractors, and I was really impressed. They know what it
                  takes to put together a great project, and hearing about the
                  structure and processes they have in place for their business
                  leaves me no doubt that they are the #1 choice!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-8 */}
      <section className="container acodion mt-5">
        <div className="ditel-hading">
          <h1 className="text-center">FAQ's</h1>
          <p className="text-center">
            These revies aim to highlight positive customer experiences and
            build trust with potential clients.
          </p>
          {/*  */}
          <div class="accordion accordion-flush" id="accordionFlushExample">
            {/*  */}
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What services do we offer?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {" "}
                  We conduct a final walkthrough with you to ensure every detail
                  meets your satisfaction. We also provide a post-project
                  follow-up to address any issues that may arise.
                </div>
              </div>
            </div>
            {/*  */}
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What happens after the remodel is complete?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  We conduct a final walkthrough with you to ensure every detail
                  meets your satisfaction. We also provide a post-project
                  follow-up to address any issues that may arise.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How long will my remodeling project take?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button colla"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Can I stay in my home during the remodel?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive">
                <button
                  class="accordion-button coll"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Do you provide design services?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSix">
                <button
                  class="accordion-button collm"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Can you work with my existing plans or designer?
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      {/* section-footer */}
      <section className="footer-main mt-5">
        <div className="footer-bg">
          <div className="footer-hadding pt-5">
            <h1 className="text-center text-white">
              Ready for a home makeover?
            </h1>
            <h1 className="text-center text-white">Reach out to us today!</h1>
            <div className="email-box-footer d-flex justify-content-center">
              <div className="email-container">
                <input
                  type="email"
                  placeholder="Enter your email here..."
                  className="email-input"
                />
                <button className="email-send">Send</button>
              </div>
            </div>
            <div className="icons-all text-center text-white">
              <i class="fa-brands fa-instagram "></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="container">
              <div className="lining"></div>
              <div className="foote-hading">
                <div className="footer-logs  my-auto d-flex d-flex justify-content-between d-flex mt-5">
                  <img src={logosf} alt="" />
                  <ul className="d-flex my-auto d-flex text-white gap-5">
                    <li>Home</li>
                    <li>Aboute Us</li>
                    <li>Services</li>
                    <li>Portolio</li>
                    <li>Contact Us</li>
                  </ul>
                  <div className="contect-heder my-auto d-flex   text-white">
                    2024 Portrait Renovation,ins. All rights reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
