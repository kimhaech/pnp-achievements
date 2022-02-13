import React from 'react';
import Fade from 'react-reveal/Fade';

import MemberList from './MemberList';

const MemberItem = () => {
  const list = MemberList.slice(0, 9).map((member, index) => (
    <Fade bottom>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        {(() => {
          if (member.blogURL === '') {
            return (
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                {(() => {
                  if (member.profileImage === '') {
                    return (
                      <div className="w-16 h-16 inline-flex items-center justify-center bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                    );
                  } else {
                    return (
                      <img
                        alt="team"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={member.profileImage}
                        key={index}
                      />
                    );
                  }
                })()}

                <div className="flex-grow">
                  <h2
                    className="text-gray-900 title-font font-medium"
                    key={index}
                  >
                    {member.name}
                  </h2>
                  <p className="text-gray-500" key={index}>
                    {member.classOf}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <a
                href={member.blogURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:shadow-md">
                  {(() => {
                    if (member.profileImage === '') {
                      return (
                        <div className="w-16 h-16 inline-flex items-center justify-center bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </div>
                      );
                    } else {
                      return (
                        <img
                          alt="team"
                          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                          src={member.profileImage}
                        />
                      );
                    }
                  })()}

                  <div className="flex-grow">
                    <h2
                      className="text-gray-900 title-font font-medium"
                      key={index}
                    >
                      {member.name}
                    </h2>
                    <p className="text-gray-500">{member.classOf}</p>
                  </div>
                </div>
              </a>
            );
          }
        })()}
      </div>
    </Fade>
  ));

  return list;
};

export default MemberItem;
