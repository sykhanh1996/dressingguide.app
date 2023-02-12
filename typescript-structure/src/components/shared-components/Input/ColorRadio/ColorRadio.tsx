import clsx from 'clsx';
import { Fragment, useEffect, useState } from 'react';
import { IColorItems } from '../SuggestedRadio/SuggestedRadio.view-model';
import styles from './ColorRadio.module.scss';

const ColorRadio = (colorItems: IColorItems) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setChecked(true);
        }
    };

    return (
        <ul className={clsx('flex')}>
            {colorItems.colorArr.map((cl) => {
                return (
                    <li key={cl.id}>
                        <div className={clsx(styles.selectColor, 'flex items-center justify-center')}>
                            <input type="radio" id={'mainCl-' + cl.id} name="mainColor-radio" onChange={handleChange} />
                            <label
                                htmlFor={'mainCl-' + cl.id}
                                className="grid place-items-center shadow-md cursor-pointer"
                                style={{ backgroundColor: cl.color, outlineColor: checked ? cl.borderColor : '' }}
                            ></label>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
export default ColorRadio;
