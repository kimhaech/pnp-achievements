import React from 'react';

import Fade from 'react-reveal/Fade';

function About() {
  return (
    <section
      id="about"
      className="text-gray-700 body-font border-t border-gray-200"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            ABOUT
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            학회 소개
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-3">
            PnP는 Passion & Pioneer, “열정을 가진 자들이 모여 세상을 개척한다”
            라는 의미를 가지고 있습니다.
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            1999년 디지털정보공학과 소속 학회로 설립되어 학부 개편에 따라 현재
            컴퓨터공학부에 소속되어 있는 학술 학회입니다.
          </p>
          <br />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            컴퓨터공학부 학부생들이 개발자로 성장하기 위해 자신의 목표를 찾고,
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            같은 목표를 가지고 있는 학우들과 함께 학습 및 연구를 통해 자신의
            프로젝트를 완성해나가고 있습니다.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          <Fade bottom>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    스터디 및 튜터링
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    학회원들과 함께 협력하며, 컴퓨터 기술 및 이론에 관한 학습을
                    통해 자신의 소프트웨어 분야의 전문성을 키워갑니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    세미나
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    개강 총회, 종강 총회, 정기 회의를 진행하여 학회원들과 친목을
                    도모하고 원활하고 활발한 활동을 진행합니다. 매 학기 말
                    서로의 프로젝트를 발표를 통해 공유합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    프로젝트
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    공모전, 대회, 해커톤 등 다양한 대외활동 또는 자체 개발
                    프로젝트에 참여하며 자신만의 프로젝트를 완성해나갑니다.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
