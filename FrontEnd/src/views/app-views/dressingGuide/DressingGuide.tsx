import clsx from 'clsx';
import { Fragment, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { FaCommentDots, FaVest } from 'react-icons/fa';
import { HiCheck, HiExclamation, HiInformationCircle, HiLink, HiMoon } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import BreadcrumbsGuide from './BreadcrumbsGuide/BreadcrumbsGuide';
import styles from './DressingGuide.module.scss';
import { DressingGuideData, IColorItem, SuggestData } from './DressingGuide.data';
import { AiFillQuestionCircle } from 'react-icons/ai';
import useCopyUrl from '@src/hooks/use-copy-url';
import { suggestionColor } from '@src/helpers/suggestionColors';
import Loading from '@src/components/shared-components/Loading/Loading';

const DressingGuide = () => {
    const liRadioColorRef = useRef<any>([]);
    const liSuggestColorRef = useRef<any>([]);

    // When user click share, update the current URL and copy it to clipboard for sharing
    const [hasCopiedUrl, copyUrl] = useCopyUrl();
    const share = useCallback(() => {
        copyUrl();
    }, [copyUrl]);

    const [colorValueInput, setColorValueInput] = useState('');
    const [suggestedColorItems, setSuggestedColorItems] = useState(SuggestData);

    useEffect(() => {
        liRadioColorRef.current.forEach((li: HTMLLIElement) => {
            const label = li.getElementsByTagName('label')[0] as HTMLLabelElement;
            label.style.backgroundColor = DressingGuideData.find((cl) => cl.id === label.htmlFor.slice(7))?.color || '';
            label.style.outlineColor =
                DressingGuideData.find((cl) => cl.id === label.htmlFor.slice(7))?.borderColor || '';
            setValueColorInput(li);
        });

        return () => {};
    }, []);

    useEffect(() => {
        if (liSuggestColorRef.current[0] != null) {
            for (let i = 0; i < liSuggestColorRef.current.length; i++) {
                if (liSuggestColorRef.current[i] != null) {
                    const label = liSuggestColorRef.current[i].getElementsByTagName('label')[0] as HTMLLabelElement;
                    const input = liSuggestColorRef.current[i].getElementsByTagName('input')[0] as HTMLInputElement;
                    input.checked = false;
                    label.style.backgroundColor =
                        DressingGuideData.find((cl) => cl.id === label.htmlFor.slice(3))?.color || '';
                }
            }
        }
    }, [colorValueInput]);

    const handleChangeRadio = () => {
        liRadioColorRef.current.forEach((li: HTMLLIElement) => {
            setValueColorInput(li);
        });
    };

    const handleChangeSuggestion = () => {
        for (let i = 0; i < liSuggestColorRef.current.length; i++) {
            if (liSuggestColorRef.current[i] != null) {
                const input = liSuggestColorRef.current[i].getElementsByTagName('input')[0] as HTMLInputElement;
                const label = liSuggestColorRef.current[i].getElementsByTagName('label')[0] as HTMLLabelElement;
                if (input.checked) {
                    label.style.borderColor =
                        suggestedColorItems.find((cl) => cl.id === label.htmlFor.slice(3))?.borderColor || '';
                }
            }
        }
    };

    const setValueColorInput = (li: HTMLLIElement) => {
        const input = li.getElementsByTagName('input')[0] as HTMLInputElement;
        const label = li.getElementsByTagName('label')[0] as HTMLLabelElement;
        if (input.checked) {
            setColorValueInput(DressingGuideData.find((cl) => cl.id === label.htmlFor.slice(7))?.colorName || '');
            setSuggestedColorItems(suggestionColor(input.id.slice(7)));
        }
    };

    return (
        <Fragment>
            <main className="max-w-7xl min-h-[calc(100vh-4.75rem)] mx-auto py-14">
                {/* -- Header -- */}
                <header>
                    <h1 className={clsx(styles.header)}>
                        <FaVest className="mr-2" size="1.2em" />
                        <div className="max-h-[47px]">
                            <span>DressingGuide</span>
                            <span className="sm:inline hidden">.</span>
                            <span className="sm:inline hidden bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
                                App?
                            </span>
                        </div>
                        <a
                            className="text-gray-500 hover:text-gray-600 pl-1"
                            href="https://github.com/sykhanh1996/DressingGuide"
                            rel="noopener noreferrer"
                            target="_blank"
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
                    <a href="/" rel="noopener noreferrer" className="inline-flex items-center space-x-1">
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
                            <div className="mr-4 text-gray-600 flex space-x-3 items-center">
                                <div>
                                    {/* The button to open modal */}
                                    <label htmlFor="my-modal" className="cursor-pointer">
                                        <AiFillQuestionCircle title="Website Information" />
                                    </label>

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-2xl text-center">Author</h3>
                                            <p className="py-4">
                                                <span className="text-gray-600 font-medium">DressingGuide.App </span>
                                                was made by Khanh-Nguyen Sy while working at Nash.
                                            </p>
                                            <div className="modal-action">
                                                <label
                                                    htmlFor="my-modal"
                                                    className="btn text-2xl text-gray-500 bg-gradient-to-r from-blue-400 to-cyan-500 w-full shadow-sm border border-transparent hover:border-none"
                                                >
                                                    Yay!
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={share}
                                    title={hasCopiedUrl ? 'Copied' : 'Share'}
                                    disabled={hasCopiedUrl}
                                >
                                    {hasCopiedUrl ? <HiCheck /> : <HiLink />}
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
                                        <span className="text-xl text-gray-900 sm:min-w-[100px] min-w-[33px]">
                                            Your Main Color:
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered input-md w-full max-w-xs text-xl min-w-[65px]"
                                            value={colorValueInput}
                                            readOnly
                                        />

                                        <ul className={clsx('flex')}>
                                            <div className="grid sm:grid-rows-1 grid-rows-3 grid-flow-col gap-y-3">
                                                {DressingGuideData.map((cl, index) => {
                                                    return (
                                                        <li
                                                            key={cl.id}
                                                            ref={(el) => (liRadioColorRef.current[index] = el)}
                                                        >
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
                                                                    onChange={handleChangeRadio}
                                                                />
                                                                <label
                                                                    htmlFor={'mainCl-' + cl.id}
                                                                    className="grid place-items-center shadow-md cursor-pointer"
                                                                ></label>
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </div>
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
                    {(suggestedColorItems.length > 0 && (
                        <ul className="mt-4 grid grid-cols-2 gap-4">
                            {/* sg: suggest color */}
                            {suggestedColorItems.map((sg, index) => {
                                return (
                                    <li key={sg.id} ref={(el) => (liSuggestColorRef.current[index] = el)}>
                                        {
                                            <div
                                                className={clsx(
                                                    styles.suggestedItem,
                                                    'flex items-center justify-center',
                                                )}
                                            >
                                                <input
                                                    type="radio"
                                                    id={'sg-' + sg.id}
                                                    name="suggested-color"
                                                    onChange={handleChangeSuggestion}
                                                />
                                                <label
                                                    htmlFor={'sg-' + sg.id}
                                                    id={'label-sg-' + sg.id}
                                                    className={'grid place-items-center hover:scale-110 shadow-md'}
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
                    )) || (
                        <div className="alert alert-warning bg-yellow-50">
                            <div>
                                <HiExclamation color="#eab308" size="1.3em" className="mt-1 mr-2" />
                                <span className="text-yellow-700">No results were found!</span>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <div className="flex w-screen justify-center mb-8">
                <a
                    href="https://www.producthunt.com/posts/dressing-guide?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dressing&#0045;guide"
                    target="_blank"
                >
                    <img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=380787&theme=light"
                        alt="Dressing&#0032;Guide - dessingguide | Product Hunt"
                        style={{ width: '250px', height: '54px' }}
                        width="250"
                        height="54"
                    />
                </a>
            </div>
            <footer className="w-full flex h-[4.75rem] items-center justify-center space-x-3 font-medium text-gray-500 text-xl pb-10">
                <div className="flex-col">
                    <div className="space-x-1 ">
                        Made with <span className="opacity-40">❤</span> by
                        <a href="https://twitter.com/sykhanh1996" className="hover:text-gray-800 cursor-pointer">
                            @sykhanh1996
                        </a>
                    </div>

                    <a
                        href="https://github.com/sykhanh1996/dressingguide.site/issues"
                        className="flex justify-center text-md font-light items-center cursor-pointer hover:text-gray-800 pt-2"
                    >
                        Send feedback
                        <FaCommentDots
                            href="https://github.com/sykhanh1996/DressingGuide"
                            className="ml-2 mb-2"
                            size="1.2em"
                        />
                    </a>
                </div>
            </footer>
        </Fragment>
    );
};
export default DressingGuide;
