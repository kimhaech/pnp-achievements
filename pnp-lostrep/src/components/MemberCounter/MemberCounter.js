import React from 'react';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import MemberList from '../Member/MemberList';
import AchievementList from '../Achievement/AchievementList';

import './MemberCounter.css';

const MemberCounter = () => {
    const currentDay = new Date();
    const currentYear = currentDay.getFullYear();

    return (
        <section
            id="image"
            className="text-gray-700 body-font border-t border-b border-gray-200 bg-transperant relative"
        >
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap m-10 justify-center">
                    <div className="md:w-1/3 text-center sm:border-r sm:border-gray-200">
                        <div className="flex h-full p-8 flex-col">
                            <h1 className="sm:text-2xl text-2xl font-light title-font text-white">
                                전체 학회원 수
                            </h1>
                            <h1 className="text-5xl font-normal title-font text-white mt-3">
                                <CountUp
                                    start={0}
                                    end={MemberList.length}
                                    duration="2"
                                    delay={0}
                                >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor
                                            onChange={start}
                                            delayedCall
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                        </div>
                    </div>

                    <div className="md:w-1/3 text-center sm:border-r sm:border-gray-200">
                        <div className="flex h-full p-8 flex-col">
                            <h1 className="sm:text-2xl text-2xl font-light title-font text-white">
                                분야별 팀 수
                            </h1>
                            <h1 className="text-5xl font-normal title-font text-white mt-3">
                                <CountUp
                                    start={0}
                                    end={7}
                                    duration="2"
                                    delay={0}
                                >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor
                                            onChange={start}
                                            delayedCall
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                        </div>
                    </div>

                    <div className="md:w-1/3 text-center">
                        <div className="flex h-full p-8 flex-col">
                            <h1 className="sm:text-2xl text-2xl font-light title-font text-white">
                                {currentYear}년 학회 실적수
                            </h1>
                            <h1 className="text-5xl font-normal title-font text-white mt-3">
                                <CountUp
                                    start={0}
                                    end={AchievementList.length}
                                    duration="2"
                                    delay={0}
                                >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor
                                            onChange={start}
                                            delayedCall
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MemberCounter;
