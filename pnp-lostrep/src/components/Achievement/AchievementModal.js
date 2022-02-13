import React from 'react';

import Fade from 'react-reveal/Fade';

const AchievementModal = ({ itemsToShow, clickItems }) => {
    const list = (
        <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-2xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between m-4 rounded-t">
                            <h1 className="text-lg font-bold">
                                {itemsToShow.title}
                            </h1>
                        </div>
                        <div className="border-b border-solid border-gray-200"></div>
                        <div className="relative mx-5">
                            <img className="mt-4" src={itemsToShow.imageurl} />
                            <p className="mt-4 text-blueGray-500 text-base leading-relaxed">
                                {itemsToShow.content}
                            </p>
                            <br />
                            <p className="mb-3 text-blueGray-500 text-base leading-relaxed">
                                <a
                                    className="text-indigo-500"
                                    href={itemsToShow.link}
                                >
                                    [링크]
                                </a>
                            </p>
                        </div>
                        <div className="border-t border-solid border-blueGray-200 rounded-b"></div>
                        <div className="flex items-center justify-end m-4">
                            <button
                                className="tems-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
                                type="button"
                                onClick={() => clickItems(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    );

    return list;
};

export default AchievementModal;
