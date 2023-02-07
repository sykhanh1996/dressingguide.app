import clsx from 'clsx';
import styles from './SuggestedRadio.module.scss';

type SuggestedRadioProps = {
    color: string;
    id: string;
};
const SuggestedRadio = (props: SuggestedRadioProps) => {
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
    return (
        <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
            <input type="radio" id={props.id} name="suggested-color" className={inputClassName} />
            <label htmlFor={props.id} className={labelClassName + 'grid place-items-center hover:scale-110 shadow-md '}>
                {/* capitalize the first letter */}
                {props.color.charAt(0).toUpperCase() + props.color.slice(1)}
            </label>
        </div>
    );
};

export default SuggestedRadio;
