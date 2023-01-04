import styles from './SearchInput.module.scss';
import clsx from 'clsx';
import { DribbbleOutlined } from '@ant-design/icons';

const SearchInPut = (props: any) => {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.icon)}>~</div>
            <input type="text" className={clsx(styles.input)}></input>
        </div>
    );
};

export default SearchInPut;
