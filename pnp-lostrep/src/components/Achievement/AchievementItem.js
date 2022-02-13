import React from 'react';
import Fade from 'react-reveal/Fade';

import AchievementList from './AchievementList';

const AchievementItem = () => {
  const list = AchievementList.slice(0, 4).map((achievement, index) => (
    <Fade bottom>
      <div
        className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
        style={{
          cursor: 'pointer',
        }}
      >
        <a
          className="c-card block bg-white hover:shadow-md rounded-lg overflow-hidden border-gray-200 border"
          key={index}
        >
          <div className="relative pb-48 overflow-hidden border-gray-200 border-b-2">
            <img
              alt="cover"
              className="absolute inset-0 h-full w-full object-cover"
              src={achievement.imageurl}
              key={achievement.imageurl}
            />
          </div>
          <div className="m-5 xl:h-32">
            <h2
              className="text-gray-900 title-font font-medium break-all"
              key={achievement.title}
            >
              {achievement.title}
            </h2>
            <p className="text-gray-500 mt-2 break-all">
              {achievement.content.substr(0, 50) + '...'}
            </p>
          </div>
        </a>
      </div>
    </Fade>
  ));

  return list;
};

export default AchievementItem;
