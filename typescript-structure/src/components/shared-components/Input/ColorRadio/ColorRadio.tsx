import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ISuggestedRadioProp } from '../SuggestedRadio/SuggestedRadio.view-model';
import styles from './ColorRadio.module.scss';

const ColorRadio = (props: any) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setChecked(true);
        }
    };

    return (
        <div className={clsx(styles.selectColor, 'flex items-center justify-center')}>
            <input type="radio" id={'mainCl-' + props.id} name="mainColor-radio" onChange={handleChange} />
            <label
                htmlFor={'mainCl-' + props.id}
                className="grid place-items-center shadow-md cursor-pointer"
                style={{ backgroundColor: props.color, outlineColor: checked ? props.borderColor : '' }}
            ></label>
        </div>
    );
};
export default ColorRadio;
