import clsx from 'clsx';
import styles from './SuggestedRadio.module.scss';
import { useState } from 'react';
import { ISuggestedRadioProp } from './SuggestedRadio.view-model';

const SuggestedRadio = (props: ISuggestedRadioProp) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setChecked(true);
        }
    };
    return (
        <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
            <input type="radio" id={props.id} name="suggested-color" onChange={handleChange} />
            <label
                htmlFor={props.id}
                className={'grid place-items-center hover:scale-110 shadow-md labelColor'}
                style={{ backgroundColor: props.color, borderColor: checked ? props.borderColor : '' }}
            >
                {/* capitalize the first letter */}
                {props.colorName.charAt(0).toUpperCase() + props.colorName.slice(1)}
            </label>
        </div>
    );
};

export default SuggestedRadio;
