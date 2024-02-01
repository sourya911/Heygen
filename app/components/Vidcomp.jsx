import React from "react";
import "../globals.css";
import { FaPlay } from "react-icons/fa";
const Vidcomp = (props) => {
  return (
    <>
      <div class="max-w-md card-bg border border-gray-200 rounded-xl shadow purple-sec">
        <a href={props.lin}>
          <video
            autoPlay
            muted
            className="rounded-t-xl"
            src={props.lin}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.t1}
              <br></br>
              <span className="text-mn">{props.t2}</span>
            </h5>
          </a>
          <div className="flex justify-between items-center">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
             {props.t3}
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Started
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a href={props.lin}className="m-2">
                <button className="bg-play p-5 rounded-md">
                    <FaPlay/>
                </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vidcomp;
