import { Col, Row } from 'antd';
import clsx from 'clsx';
import styles from './Main.module.scss';

export const Main = () => {
    return (
        <Row justify="center" className={clsx(styles.main)}>
            <Col span={16} className={clsx(styles.col)}>
                <h1>
                    <span>SportGear</span>
                    <span>.</span>
                    <span>how?</span>
                </h1>
                <p className={clsx('mgt-30')}>Explain sport gears using</p>
                <div className={clsx('mgt-30')}>
                    <div className={clsx('search-title')}>title</div>
                    <div>searchBar</div>
                </div>
            </Col>
        </Row>
    );
};
