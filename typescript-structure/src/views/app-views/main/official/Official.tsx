import { Fragment } from 'react';
import styles from './Official.module.scss';
import clsx from 'clsx';
import { FaBasketballBall } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { BsCheckAll } from 'react-icons/bs';
import { HiCheck, HiInformationCircle, HiLink, HiMoon, HiSun, HiTerminal } from 'react-icons/hi';
import { Breadcrumb, Input, Select } from 'antd';

export const Official = () => {
    return (
        <Fragment>
            <main className="max-w-7xl min-h-[calc(100vh-4.75rem)] mx-auto py-14">
                {/* -- Header -- */}
                <header>
                    <h1 className={clsx(styles.header)}>
                        <FaBasketballBall className="mr-2" size="1.2em" />
                        <span>Colors</span>
                        <span>.</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
                            Guide?
                        </span>
                        <a
                            className="relative top-3.5 transform rotate-12 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                            href="#!"
                            rel="noopener noreferrer"
                        >
                            <SiGithub size={18} />
                        </a>
                    </h1>
                </header>

                {/* -- Description -- */}
                <div className={clsx(styles.desc, 'text-gray-500')}>
                    <span>
                        Do you struggle to put together an outfit? Learn how to match clothes because it’ll make it
                        easier for you to know what to
                    </span>
                    <a href="#!" rel="noopener noreferrer" className="inline-flex items-center space-x-1">
                        <FaBasketballBall aria-hidden />
                        <span className="font-medium text-gray-800 hover:text-black dark:text-gray-200">Wear</span>
                        <BsCheckAll aria-hidden />
                    </a>
                </div>

                {/* -- Content -- */}
                <div className={clsx(styles.content, 'shadow-md bg-gradient-to-r from-Indigo-50 to-Indigo-100')}>
                    {/* <div className=" bg-gradient-to-r from-sky-50 to-blue-300"> */}
                    <div className={clsx(styles.title, 'shadow-sm')}>
                        <div className={clsx(styles.startTitle)}>
                            <div>Color Combinations</div>
                        </div>
                        <div className={clsx(styles.endIcon)}>
                            <div className="mr-4 text-gray-600 flex space-x-2 items-center">
                                <button title="Toggle theme">
                                    <HiMoon />
                                </button>
                                <button title="See site's info">
                                    <HiInformationCircle />
                                </button>
                                <button>
                                    <HiCheck />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.function)}>
                        <section>
                            <nav className={clsx(styles.breadcrumb)}>
                                <Breadcrumb separator=">">
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>Colors</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                            <div className="functionContent">
                                <h2>Wardrobe Color Guide</h2>
                                {/* https://www.pinterest.com/pin/604186106279845396/visual-search/?imageSignature=ee6c5162639632c5ec69c2b54d9d1af5 */}
                                <div className={clsx('pt-4')}>
                                    <div className={clsx(styles.mainColor)}>
                                        <span className="text-xl text-gray-900">Your Main Color: </span>
                                        <Input placeholder="Basic Colors" style={{ width: 150 }} value="#2317ff" />
                                        <div className={clsx(styles.colorItems, 'flex')}>
                                            <div className={clsx(styles.colorItem, 'bg-red-400')}></div>
                                            <div className={clsx(styles.colorItem, 'bg-green-400')}></div>
                                            <div className={clsx(styles.colorItem, 'bg-yellow-400')}></div>
                                            <div className={clsx(styles.colorItem, 'bg-sky-400')}></div>
                                            <div className={clsx(styles.colorItem, 'bg-gray-400')}></div>
                                            <div className={clsx(styles.colorItem, 'bg-Orange-400')}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* -- Suggested Color -- */}
                <div className={clsx(styles.suggested, 'text-gray-500 mt-8 w-full')}>
                    <h3 className="pt-8">Suggested Colors</h3>
                    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                        <li>Item 6</li>
                    </ul>
                </div>
            </main>
        </Fragment>
    );
};
