import React from 'react';
import { Link } from 'react-router-dom';

import AchievementItem from './AchievementItem';

const Achievement = () => {
  return (
    <section
      id="achievement"
      className="text-gray-700 body-font border-t border-gray-200"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            ACHIEVEMENTS
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            활동 성과
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-3 -mb-5">
            PnP에서 이룬 활동 성과를 소개합니다.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <AchievementItem />
        </div>

        <Link to="/achievements">
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            더보기
            <svg
              className="w-6 h-6 mt-0.5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Achievement;
