import { Fragment } from 'react';
import styles from './Official.module.scss';
import clsx from 'clsx';
import { FaVest } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { BsCheckAll } from 'react-icons/bs';
import { HiCheck, HiInformationCircle, HiMoon } from 'react-icons/hi';
import SuggestedRadio from '@src/components/shared-components/Input/SuggestedRadio/SuggestedRadio';

export const Official = () => {
    const suggestedItem = [
        {
            color: 'green',
            id: 'sg-green',
        },
        {
            color: 'blue',
            id: 'sg-blue',
        },
        {
            color: 'red',
            id: 'sg-red',
        },
        {
            color: 'yellow',
            id: 'sg-yellow',
        },
        {
            color: 'sky',
            id: 'sg-sky',
        },
        {
            color: 'gray',
            id: 'sg-gray',
        },
    ];

    return (
        <Fragment>
            <main className="max-w-7xl min-h-[calc(100vh-4.75rem)] mx-auto py-14">
                {/* -- Header -- */}
                <header>
                    <h1 className={clsx(styles.header)}>
                        <FaVest className="mr-2" size="1.2em" />
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
                        <FaVest aria-hidden />
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
                            <nav className={clsx(styles.breadcrumb)}></nav>
                            <div className="functionContent">
                                <h2>Wardrobe Color Guide</h2>
                                {/* https://www.pinterest.com/pin/604186106279845396/visual-search/?imageSignature=ee6c5162639632c5ec69c2b54d9d1af5 */}
                                <div className={clsx('pt-4')}>
                                    <div className={clsx(styles.mainColor)}>
                                        <span className="text-xl text-gray-900">Your Main Color: </span>
                                        {/* <Input placeholder="Basic Colors" style={{ width: 150 }} value="#2317ff" /> */}
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
                                                        id="radio-1"
                                                        name="switch-1"
                                                        className="peer/itemRed"
                                                    />
                                                    <label
                                                        htmlFor="radio-1"
                                                        className="peer-checked/itemRed:outline peer-checked/itemRed:outline-4 peer-checked/itemRed:outline-red-500 peer-checked/itemRed:outline-offset-1 bg-red-400 grid place-items-center shadow-md cursor-pointer"
                                                    ></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div
                                                    className={clsx(
                                                        styles.selectColor,
                                                        'flex items-center justify-center',
                                                    )}
                                                >
                                                    <input
                                                        type="radio"
                                                        id="radio-2"
                                                        name="switch-1"
                                                        className="peer/itemGreen"
                                                    />
                                                    <label
                                                        htmlFor="radio-2"
                                                        className="peer-checked/itemGreen:outline peer-checked/itemGreen:outline-4 peer-checked/itemGreen:outline-green-500 peer-checked/itemGreen:outline-offset-1 bg-green-400 grid place-items-center shadow-md cursor-pointer"
                                                    ></label>
                                                </div>
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
                        {suggestedItem.map((sg) => (
                            <li key={sg.id}>
                                <SuggestedRadio color={sg.color} id={sg.id}></SuggestedRadio>
                            </li>
                        ))}
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
