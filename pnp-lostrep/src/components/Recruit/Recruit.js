import React from 'react';

import recruitimage from '../../static/svg/recruit.svg';

import Fade from 'react-reveal/Fade';

const Recruit = () => {
    return (
        <section id="recruit" className="border-b border-gray-200">
            
                <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 text-center sm:text-left">
                            RECRUIT
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center sm:text-left">
                            학회 지원
                        </h1>
                        <p className="leading-relaxed text-base mb-6 mt-3 text-center sm:text-left">
                            PnP는 학부 제한 없이, 한국외국어대학교 재학생이라면
                            누구나 지원할 수 있습니다. 열정을 가지고 개발자로
                            성장하고 싶은 분들을 모두 환영합니다!
                        </p>
                        <a
                            className="text-center sm:text-left"
                            href="https://forms.gle/Y9vF74i1cqfPm9aF6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="inline-flex mr-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg animate-bounce mt-2">
                                지원하기
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
                        </a>
                    </div>

                    <Fade bottom>
                        <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
                            <div class="container mx-auto w-full h-full">
                                <div class="relative wrap overflow-hidden p-10 h-full">
                                    <div
                                        class="border-2-2 border-indigo-400 absolute h-full border"
                                        style={{
                                            right: '50%',
                                            borderRadius: '2%',
                                        }}
                                    ></div>
                                    <div
                                        class="border-2-2 border-indigo-400 absolute h-full border"
                                        style={{
                                            left: '50%',
                                            borderRadius: '2%',
                                        }}
                                    ></div>
                                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div class="order-1 w-5/12"></div>
                                        <div class="order-1 w-5/12 px-1 py-4 text-right">
                                            <p class="mb-3 text-base text-indigo-500">
                                                08.26(목) ~ 09.10(금)
                                            </p>
                                            <h4 class="mb-3 font-bold text-lg md:text-2xl">
                                                지원서 제출
                                            </h4>
                                            <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                                약 2주간 학회원 모집이
                                                진행됩니다.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div class="order-1 w-5/12"></div>
                                        <div class="order-1  w-5/12 px-1 py-4 text-left">
                                            <p class="mb-3 text-base text-indigo-500">
                                                09.13(월)
                                            </p>
                                            <h4 class="mb-3 font-bold text-lg md:text-2xl">
                                                면접
                                            </h4>
                                            <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                                시간, 장소 등 세부 사항은 개인
                                                이메일로 보내드립니다.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div class="order-1 w-5/12"></div>
                                        <div class="order-1 w-5/12 px-1 py-4 text-right">
                                            <p class="mb-3 text-base text-indigo-500">
                                                9.20(월)
                                            </p>
                                            <h4 class="mb-3 font-bold text-lg md:text-2xl">
                                                최종 합격자 안내
                                            </h4>
                                            <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                                최종 합격여부를 이메일로
                                                안내드립니다. 합격자는 활동 관련
                                                사항을 받아보실 수 있습니다.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div class="order-1 w-5/12"></div>
                                        <div class="order-1  w-5/12 px-1 py-4">
                                            <p class="mb-3 text-base text-indigo-500">
                                                09.22(수) ~
                                            </p>
                                            <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">
                                                PnP 활동 시작
                                            </h4>
                                            <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                                학회 정규 활동이 시작됩니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    class="w-2/5 h-2/5 mx-auto"
                                    src={recruitimage}
                                    alt="recruitimage"
                                />
                            </div>
                        </div>
                    </Fade>
                </div>
            
        </section>
    );
};

export default Recruit;
