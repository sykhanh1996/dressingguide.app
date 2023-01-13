import Fig from '@src/components/Icons/fig';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaBasketballBall } from 'react-icons/fa';
import { BsCheckAll } from 'react-icons/bs';

import { SiGithub } from 'react-icons/si';
import { Fragment } from 'react';

export const MainSecond = () => {
    return (
        <Fragment>
            <div className="max-w-7xl min-h-[calc(100vh-4.75rem)] mx-auto py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:items-center">
                {/* Title */}
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-center inline-flex items-center select-none">
                    <FaBasketballBall className="mr-2" size="1.2em" />
                    <span>SportGears</span>
                    <span>.</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
                        how?
                    </span>
                    <a
                        className="relative top-3.5 transform rotate-12 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiGithub size={18} />
                    </a>
                </h1>
                <p className="mt-2 sm:mt-4 inline-flex items-center space-x-2 text-xl text-gray-500 dark:text-gray-400 sm:text-center">
                    <span>Explain sport gears using</span>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1"
                    >
                        <FaBasketballBall aria-hidden />
                        <span className="font-medium text-gray-800 hover:text-black dark:text-gray-200">Gears</span>
                        <BsCheckAll aria-hidden />
                    </a>
                </p>

                {/* Input */}
                <div className="self-center mt-8 bg-white dark:bg-black shadow-md w-full max-w-xl rounded overflow-hidden content">
                    <div className="relative h-8 flex items-center justify-between shadow-sm">
                        <div className="ml-4 flex space-x-2 items-center">
                            <span className="h-3 w-3 rounded-full bg-red-400" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400" />
                            <span className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-sm font-light text-gray-500">
                            Search
                        </div>
                    </div>
                    <div className="px-4 py-3 font-mono flex items-center">
                        <span className="text-gray-500 select-none">~</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
