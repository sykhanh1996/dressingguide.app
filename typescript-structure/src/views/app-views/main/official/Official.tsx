import { Fragment, memo } from 'react';
import styles from './Official.module.scss';
import clsx from 'clsx';
import { FaVest, FaCommentDots } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { BsCheckAll } from 'react-icons/bs';
import { HiCheck, HiInformationCircle, HiMoon } from 'react-icons/hi';
import { ISuggestedRadioProp } from '@src/components/shared-components/Input/SuggestedRadio/SuggestedRadio.view-model';
import SuggestedRadio from '@src/components/shared-components/Input/SuggestedRadio/SuggestedRadio';
import ColorRadio from '@src/components/shared-components/Input/ColorRadio/ColorRadio';
import Breadcrumbs from '@src/components/shared-components/Breadcrumbs/Breadcrumbs';

const Official = () => {
    const colorItems: ISuggestedRadioProp[] = [
        {
            color: 'rgb(34 197 94)',
            id: 'sg-green',
            colorName: 'green',
            borderColor: 'rgb(74 222 128)',
        },
        {
            color: 'rgb(59 130 246)',
            id: 'sg-blue',
            colorName: 'blue',
            borderColor: 'rgb(96 165 250)',
        },
        {
            color: 'rgb(239 68 68)',
            id: 'sg-red',
            colorName: 'red',
            borderColor: 'rgb(252 165 165)',
        },
        {
            color: 'rgb(234 179 8)',
            id: 'sg-yellow',
            colorName: 'yellow',
            borderColor: 'rgb(250 204 21)',
        },
        {
            color: 'rgb(14 165 233)',
            id: 'sg-sky',
            colorName: 'sky',
            borderColor: 'rgb(56 189 248)',
        },
        {
            color: 'rgb(107 114 128)',
            id: 'sg-gray',
            colorName: 'gray',
            borderColor: 'rgb(156 163 175)',
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
                                <div className="text-xl breadcrumbs">
                                    <Breadcrumbs />
                                </div>
                                {/* https://www.pinterest.com/pin/604186106279845396/visual-search/?imageSignature=ee6c5162639632c5ec69c2b54d9d1af5 */}
                                <div className={clsx('pt-4')}>
                                    <div className={clsx(styles.mainColor)}>
                                        <span className="text-xl text-gray-900">Your Main Color: </span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered input-md w-full max-w-xs text-xl"
                                            value="#2317ff"
                                            readOnly
                                        />

                                        <ul className={clsx('flex')}>
                                            {colorItems.map((cl) => (
                                                <li key={cl.id}>
                                                    <ColorRadio {...cl} />
                                                </li>
                                            ))}
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
                        {colorItems.map((sg) => (
                            <li key={sg.id}>
                                <SuggestedRadio {...sg}></SuggestedRadio>
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
                        Send feedback <FaCommentDots className="ml-2 mb-2" size="1.2em" />
                    </a>
                </div>
            </footer>
        </Fragment>
    );
};

export default memo(Official);
