import clsx from 'clsx';
import styles from './SuggestedRadio.module.scss';
import { useEffect } from 'react';
import { ISuggestedRadioProp } from './SuggestedRadio.view-model';

const SuggestedRadio = (props: ISuggestedRadioProp) => {
    const inputClassName = 'peer/' + props.color;

    const labelClassName =
        'peer-checked/' +
        props.color +
        ':border-4 peer-checked/' +
        props.color +
        ':border-' +
        props.color +
        '-500 peer-checked/' +
        props.color +
        ':scale-110 bg-' +
        props.color +
        '-400' +
        ' ';

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const labels = document.querySelectorAll(`.${styles.suggestedItem}>label`);

        labels.forEach((item) => {
            if ((item as HTMLLabelElement).htmlFor == event.target.id) {
                item.classList.add('border-4', 'border-' + props.colorName + '-500', 'scale-110');
            } else {
                item.classList.remove('border-4', 'border-' + props.colorName + '-500', 'scale-110');
            }
        });
    };
    // useEffect(() => {
    //     const labels = document.querySelectorAll(`.${styles.suggestedItem}>label`);

    //     labels.forEach((item) => {
    //         if (props.color == item.textContent?.toLowerCase()) {
    //             // item.st;
    //         }
    //     });
    // }, []);
    return (
        <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
            <input type="radio" id={props.id} name="suggested-color" onChange={handleChange} />
            <label
                htmlFor={props.id}
                className={'grid place-items-center hover:scale-110 shadow-md labelColor'}
                style={{ backgroundColor: props.color }}
            >
                {/* capitalize the first letter */}
                {props.colorName.charAt(0).toUpperCase() + props.colorName.slice(1)}
            </label>
        </div>
    );
};

export default SuggestedRadio;
