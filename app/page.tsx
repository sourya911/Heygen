// pages/index.js
import Head from "next/head";
import Buttonn from "./components/Buttonn";
import Videos from "./components/Videos";
import Vidcomp from "./components/Vidcomp";
import Cardvid from "./components/Cardvid";
import Scrollcard from "./components/Scrollcard";
import Avtar from "./components/Avtar";
import Scrolimg from "./components/Scrolimg";
import Instantavt from "./components/Instantavt";
import Aivoice from "./components/Aivoice";
import Genratevc from "./components/Genratevc";
import DivFirst from "./components/DivFirst";
import DivSec from "./components/DivSec";
import DivThird from "./components/DivThird";
import Feature from "./components/Featuresc";
import Featuresc from "./components/Featuresc";
import Footer from "./components/Footer";
import Safety from "./components/Safety";
import Industry from "./components/Industry";
import Stcreat from "./components/Stcreat";
import Review from "./components/Review"
import LastVideo from "./components/Lastvideo";

const Home = () => {
  return (
    <div className=" mx-auto p-8 bg-grrr w-[1780px] md:w-[880px] sm:w-[330px] container">
      <Head>
        <title>Hygen - Home</title>
      </Head>

      {/* Navigation */}

      <nav className="bg-grrr white fixed w-full z-[2000] top-0 start-0 border-b border-gray-200 container">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://www.heygen.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg"
              className="h-10"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 h-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-grrr md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="text-center mt-20 text-7559ff container">
        <h1 className="text-6xl font-bold mb-4 text-mn">AI-powered video</h1>
        <h1 className="text-6xl font-bold mb-4 text-gray-800">
          creations at scale
        </h1>
        <p className=" text-center flex my-8 md:my-20 md:mx-5 lg:my-8 lg:ml-[28rem] text-xl text-black ">
          Effortlessly produce studio quality videos with AI-generated avatars
          and voices.
        </p>
        <Buttonn />
        <p className="text-gray-800">No credit card needed</p>
      </div>

      {/* Logos */}
      <section id="logos" className="my-8 container">
        <div className="bg-mn text-gray-400">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AAmazon_logo.svg&psig=AOvVaw1LDVy4U3OSBJPcNcY3ARMo&ust=1706454505182000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODj28fs_YMDFQAAAAAdAAAAABAE"
            alt=""
          />
        </div>
      </section>

      {/* videos */}

      <section
        id="video-section"
        className="vdd container relative my-8 flex flex-wrap justify-center items-center w-[1150px]"
      >
        <Videos url="https://resource.heygencdn.com/homepage/header_video_josh2.mp4" />
      </section>

      {/* Features */}
      <section
        id="text-vides"
        className=" flex g-1   items-center justify-center"
      >
        <h1 className="text-9xl max-w-[416px] tracking-wide">
          Create videos for every team
        </h1>
        <h3 className="text-2xl">
          Engage, explain, entertain - AI-Powered video creation for any need.
        </h3>
      </section>
      <div className="gap-3">
        <section className="flex justify-center gap-28 ">
          <Vidcomp 
            t1="Sales outreach"
            t2="that converts"
            t3=" Create personalized outreach videos at scale"
            lin="https://resource.heygencdn.com/homepage/usecase_sales2.mp4"
          />
          <Vidcomp
            t1="Product marketing"
            t2="‍that resonates"
            t3="Produce engaging & concise product videos"
            lin="https://resource.heygencdn.com/homepage/usecase_productmarketing2.mp4"
          />
        </section>
        <section className="flex gap-28 align-bottom justify-center">
          <Vidcomp
            t1="Content marketing"
            t2="that engage"
            t3="Supercharge your content calendar with videos
        "
            lin="https://resource.heygencdn.com/homepage/usecase_mailchimp2.mp4"
          />
          <Vidcomp
            t1="Learning & development"
            t2="that teaches"
            t3="Create training videos your team will actually watch"
            lin="https://resource.heygencdn.com/website/vera_remove/usecase_lnd2_new_output.mp4"
          />
        </section>
      </div>
      {/* Pricing */}
      <section id="pricing" className="my-8 flex md:flex-col">
        
        <Cardvid />
        
      </section>

      {/* Resources */}
      <section id="resources" className="my-8 flex overflow-hidden">
        <Scrollcard
          lin="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65673ea2d58453c68698c44f_img01-p-500.webp"
          txt="Choose from over 100+ AI avatars or customize your own.
"
          no="01"
          head="Create or choose an avatar"
        />
        <Scrollcard
          head="Record or choose a voice
        "
          no="02"
          txt="Choose from a collection of high-quality voices or record your own.
        "
          lin="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560dc6ccd59219021d1e076_vibe.svg"
        />
        <Scrollcard
          no="03"
          txt="Select from an extensive array of ready-to-use templates for any scenario, or begin with a clean slate.
        "
          head="Select a template or start from scratch
        "
          lin="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-800.webp"
        />
      </section>
      {/* AI Voices */}

      <section className="container">
        <Avtar />
      </section>

      <section className="gap-2">
      <marquee direction="left">  <Scrolimg /></marquee>
      <marquee direction="right">  <Scrolimg /></marquee>
      </section>

      {/* Instant avatar */}
      <section className="mt-2 p-10">
        <Instantavt
          head="Instant avatar"
          txt="A lifestyle avatar in a natural setting"
          lin="https://resource.heygencdn.com/homepage/AIavatar_instant4.mp4"
        />

        <Instantavt
          head="Instant avatar"
          txt="A lifestyle avatar in a natural setting"
          lin="https://resource.heygencdn.com/website/vera_remove/aiavatar_studio3.mp4"
        />

        <Instantavt
          head="Studio avatar"
          txt="A professional-grade avatar for diverse application"
          lin="https://resource.heygencdn.com/homepage/AIavatar_photo4.mp4"
        />
      </section>

      {/* AI voices */}
      <section>
        <Aivoice />
      </section>

      {/*Generate Voice  */}
      <section className="container ">
        <Genratevc />
      </section>

      {/* Feature */}
      <section className="">
        <Featuresc />
      </section>

      <section>
        <DivFirst/>
      </section>
      
      <section>
        <DivSec/>
      </section>

      <section>
      <DivThird/>
      </section>

      <section className="txt-mn">
        {/* <LastVideo/> */}
      </section>
      {/* last videos section */}
      <section>
        <Safety />
      </section>

      {/* Industry */}
      <section className="container p-3">
        <Industry />
      </section>

    <section>
      <Review/>
    </section>

      <section id="stcr">
        <Stcreat />
      </section>



      {/* footer */}
      <section className="container p-3">
        <Footer />
      </section>
      {/* Get Started */}
    </div>
  );
};

export default Home;
