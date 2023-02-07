import clsx from 'clsx';
import styles from './SuggestedRadio.module.scss';

type SuggestedRadioProps = {
    color: string;
};
const SuggestedRadio = (props: SuggestedRadioProps) => {
    const labelClassName =
        'peer-checked/' +
        props.color +
        ':border-4 peer-checked/' +
        props.color +
        ':border-' +
        props.color +
        '-500 hover:scale-110 peer-checked/' +
        props.color +
        ':scale-110 bg-' +
        props.color +
        '-400';
    const inputClassName = 'peer/' + props.color;
    return (
        <div className={clsx(styles.suggestedItem, 'flex items-center justify-center')}>
            <input type="radio" id="radio-one" name="switch-one" className={inputClassName} />
            <label htmlFor="radio-one" className={labelClassName + ' grid place-items-center shadow-md'}>
                {/* capitalize the first letter */}
                {props.color.charAt(0).toUpperCase() + props.color.slice(1)}
            </label>
        </div>
    );
};

export default SuggestedRadio;
