import clsx from 'clsx';
import styles from './SuggestedRadio.module.scss';
import { useEffect, useRef, memo } from 'react';
import { IColorItems } from './SuggestedRadio.view-model';

const SuggestedRadio = (colorItems: IColorItems) => {
    const liRef = useRef<any>([]);
    useEffect(() => {
        liRef.current.forEach((li: HTMLLIElement) => {
            const label = li.getElementsByTagName('label')[0] as HTMLLabelElement;
            label.style.backgroundColor =
                colorItems.suggestColors.find((cl) => cl.id === label.htmlFor.slice(3))?.color || '';
        });
    }, []);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        liRef.current.forEach((li: HTMLLIElement) => {
            const input = li.getElementsByTagName('input')[0] as HTMLInputElement;
            const label = li.getElementsByTagName('label')[0] as HTMLLabelElement;
            if (input.checked) {
                label.style.borderColor =
                    colorItems.suggestColors.find((cl) => cl.id === label.htmlFor.slice(3))?.borderColor || '';
            }
        });
    };

    return (
        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* sg: suggest color */}
            {colorItems.suggestColors.map((sg, index) => {
                return (
                    <li key={sg.id} ref={(el) => (liRef.current[index] = el)}>
                        {
                            <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
                                <input type="radio" id={'sg-' + sg.id} name="suggested-color" onChange={handleChange} />
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
};

export default memo(SuggestedRadio);
