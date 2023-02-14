import clsx from 'clsx';
import styles from './SuggestedRadio.module.scss';
import { useEffect, useRef, memo, useState } from 'react';
import { IColorItem } from './SuggestedRadio.view-model';
import Loading from '../../Loading/Loading';
import { HiExclamation } from 'react-icons/hi';

const SuggestedRadio = (props: any) => {
    const liRef = useRef<any>([]);
    const suggestColors = (props.suggestColors as IColorItem[]) || [];
    // const [isLoading, setIsLoading] = useState(true);

    // const setIntervalLoading = setTimeout(() => setIsLoading(false), 1000);

    useEffect(() => {
        if (liRef.current[0]) {
            liRef.current.forEach((li: HTMLLIElement) => {
                const label = li.getElementsByTagName('label')[0] as HTMLLabelElement;
                const input = li.getElementsByTagName('input')[0] as HTMLInputElement;
                input.checked = false;
                label.style.backgroundColor = suggestColors.find((cl) => cl.id === label.htmlFor.slice(3))?.color || '';
            });
        }
        return () => {
            // clearTimeout(setIntervalLoading);
        };
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        liRef.current.forEach((li: HTMLLIElement) => {
            const input = li.getElementsByTagName('input')[0] as HTMLInputElement;
            const label = li.getElementsByTagName('label')[0] as HTMLLabelElement;
            if (input.checked) {
                label.style.borderColor =
                    suggestColors.find((cl) => cl.id === label.htmlFor.slice(3))?.borderColor || '';
            }
        });
    };
    console.log('Render SuggestedRadio');
    // if (isLoading == true) {
    //     return <Loading />;
    // }
    if (suggestColors.length > 0) {
        return (
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* sg: suggest color */}
                {suggestColors.map((sg, index) => {
                    return (
                        <li key={sg.id} ref={(el) => (liRef.current[index] = el)}>
                            {
                                <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
                                    <input
                                        type="radio"
                                        id={'sg-' + sg.id}
                                        name="suggested-color"
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor={'sg-' + sg.id}
                                        className={'grid place-items-center hover:scale-110 shadow-md labelColor'}
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
        );
    }
    return (
        <div className="alert alert-warning bg-yellow-50">
            <div>
                <HiExclamation color="#eab308" size="1.3em" className="mt-1 mr-2" />
                <span className="text-yellow-700">No results were found!</span>
            </div>
        </div>
    );
};

export default memo(SuggestedRadio);
