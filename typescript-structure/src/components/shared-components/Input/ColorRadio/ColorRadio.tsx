import clsx from 'clsx';
import styles from './ColorRadio.module.scss';

type ColorRadioProps = {
    color: string;
    id: string;
};

const ColorRadio = (props: ColorRadioProps) => {
    return (
        <div className={clsx(styles.selectColor, 'flex items-center justify-center')}>
            <input type="radio" id={props.id} name="color-radio" />
            <label
                htmlFor={props.id}
                className="peer-checked/itemRed:outline peer-checked/itemRed:outline-4 peer-checked/itemRed:outline-red-500 peer-checked/itemRed:outline-offset-1 bg-red-400 grid place-items-center shadow-md cursor-pointer"
            ></label>
        </div>
    );
};
export default ColorRadio;
