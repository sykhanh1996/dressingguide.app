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
                        <span>DressingGuide</span>
                        <span>.</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
                            Info?
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
                                        <ul className={clsx(styles.colorItems, 'flex')}>
                                            <li>
                                                <div
                                                    className={clsx(
                                                        styles.selectColor,
                                                        'flex items-center justify-center',
                                                    )}
                                                >
                                                    <input
                                                        type="radio"
                                                        id="radio-two"
                                                        name="switch-two"
                                                        className="peer/green"
                                                    />
                                                    <label
                                                        htmlFor="radio-two"
                                                        className="peer-checked/green:border-4 peer-checked/green:border-green-500 bg-red-400 grid place-items-center shadow-md"
                                                    ></label>
                                                </div>
                                                {/* <div className={clsx(styles.colorItem, 'bg-red-400')}></div> */}
                                            </li>
                                            <li>
                                                <div className={clsx(styles.colorItem, 'bg-green-400')}></div>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.colorItem, 'bg-yellow-400')}></div>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.colorItem, 'bg-sky-400')}></div>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.colorItem, 'bg-gray-400')}></div>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.colorItem, 'bg-orange-400')}></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* -- Suggested Color -- */}
                <div className={clsx(styles.suggested, 'text-gray-500 mt-8 w-full')}>
                    <h3 className="pt-8">Suggested Easy Complimentary Outfit Parings With:</h3>
                    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <li>
                            <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
                                <input type="radio" id="radio-one" name="switch-one" className="peer/green" />
                                <label
                                    htmlFor="radio-one"
                                    className="peer-checked/green:border-4 peer-checked/green:border-green-500 bg-green-400 grid place-items-center shadow-md"
                                >
                                    Green
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
                                <input type="radio" id="radio-second" name="switch-one" className="peer/blue" />
                                <label
                                    htmlFor="radio-second"
                                    className="peer-checked/blue:border-4 peer-checked/blue:border-blue-500 bg-blue-400 grid place-items-center shadow-md"
                                >
                                    Blue
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
                                <input type="radio" id="radio-3" name="switch-one" className="peer/red" />
                                <label
                                    htmlFor="radio-3"
                                    className="peer-checked/red:border-4 peer-checked/red:border-red-500 bg-red-400 grid place-items-center shadow-md"
                                >
                                    Red
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
                                <input type="radio" id="radio-4" name="switch-one" className="peer/yellow" />
                                <label
                                    htmlFor="radio-4"
                                    className="peer-checked/yellow:border-4 peer-checked/yellow:border-yellow-500 bg-yellow-400 grid place-items-center shadow-md"
                                >
                                    Yellow
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
                                <input type="radio" id="radio-5" name="switch-one" className="peer/sky" />
                                <label
                                    htmlFor="radio-5"
                                    className="peer-checked/sky:border-4 peer-checked/sky:border-sky-500 bg-sky-400 grid place-items-center shadow-md"
                                >
                                    Sky
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
                                <input type="radio" id="radio-6" name="switch-one" className="peer/gray" />
                                <label
                                    htmlFor="radio-6"
                                    className="peer-checked/gray:border-4 peer-checked/gray:border-gray-500 bg-gray-400 grid place-items-center shadow-md"
                                >
                                    Gray
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
            <footer className="w-full flex h-[4.75rem] items-center justify-center space-x-3 font-medium text-gray-500 text-xl pb-10">
                <div className="flex-col">
                    <div className="space-x-1 ">
                        Made with <span className="opacity-40">❤</span> by
                        <a href="!#" className="hover:text-gray-800 cursor-pointer">
                            @sykhanh1996
                        </a>
                    </div>
                    <a
                        href="!#"
                        className="flex justify-center text-md font-light items-center cursor-pointer hover:text-gray-800 pt-2"
                    >
                        Send feedback
                    </a>
                </div>
            </footer>
        </Fragment>
    );
};
