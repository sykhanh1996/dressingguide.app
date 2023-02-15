import clsx from 'clsx';
import { Fragment } from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { FaCommentDots, FaVest } from 'react-icons/fa';
import { HiCheck, HiInformationCircle, HiMoon } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import BreadcrumbsGuide from './BreadcrumbsGuide/BreadcrumbsGuide';
import styles from './DressingGuide.module.scss';
import { DressingGuideData } from './DressingGuide.data';

const DressingGuide = () => {
    return (
        <Fragment>
            <main className="max-w-7xl min-h-[calc(100vh-4.75rem)] mx-auto py-14">
                {/* -- Header -- */}
                <header>
                    <h1 className={clsx(styles.header)}>
                        <FaVest className="mr-2" size="1.2em" />
                        <div className="max-h-[47px]">
                            <span>DressingGuide</span>
                            <span>.</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
                                Info?
                            </span>
                        </div>
                        <a className="text-gray-500 hover:text-gray-600 " href="#!" rel="noopener noreferrer">
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
                                    <BreadcrumbsGuide />
                                </div>
                                {/* https://www.pinterest.com/pin/604186106279845396/visual-search/?imageSignature=ee6c5162639632c5ec69c2b54d9d1af5 */}
                                <div className={clsx('pt-4')}>
                                    <div className={clsx(styles.mainColor)}>
                                        <span className="text-xl text-gray-900 min-w-[100px]">Your Main Color: </span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered input-md w-full max-w-xs text-xl"
                                            // value={props.colorRadioCheckedValue}
                                            readOnly
                                        />

                                        <ul className={clsx('flex')}>
                                            {DressingGuideData.map((cl, index) => {
                                                return (
                                                    <li key={cl.id}>
                                                        <div
                                                            className={clsx(
                                                                styles.selectColor,
                                                                'flex items-center justify-center',
                                                            )}
                                                        >
                                                            <input
                                                                type="radio"
                                                                id={'mainCl-' + cl.id}
                                                                name="mainColor-radio"
                                                                defaultChecked={index === 0}
                                                                // onChange={handleChangeRadio}
                                                            />
                                                            <label
                                                                htmlFor={'mainCl-' + cl.id}
                                                                className="grid place-items-center shadow-md cursor-pointer"
                                                            ></label>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* -- Suggested Color -- */}
                <div className={clsx(styles.suggested, 'text-gray-500 mt-8 w-full')}>
                    <h3 className="pt-8 pb-8">Suggested Easy Complimentary Outfit Parings With:</h3>
                    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {/* sg: suggest color */}
                        {DressingGuideData.map((sg, index) => {
                            return (
                                <li key={sg.id}>
                                    {
                                        <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
                                            <input
                                                type="radio"
                                                id={'sg-' + sg.id}
                                                name="suggested-color"
                                                // onChange={handleChange}
                                            />
                                            <label
                                                htmlFor={'sg-' + sg.id}
                                                className={
                                                    'grid place-items-center hover:scale-110 shadow-md labelColor'
                                                }
                                            >
                                                {/* capitalize the first letter */}
                                                {sg.colorName.charAt(0).toUpperCase() + sg.colorName.slice(1)}
                                            </label>
                                        </div>
                                    }
                                </li>
                            );
                        })}
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
export default DressingGuide;
