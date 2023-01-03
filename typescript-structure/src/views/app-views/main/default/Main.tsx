import { Col, Row } from 'antd';
import clsx from 'clsx';
import styles from './Main.module.scss';

export const Main = () => {
    return (
        <Row justify="center" className={clsx(styles.main)}>
            <Col span={16}>
                <h1>
                    <span>SportGear</span>
                    <span>.</span>
                    <span>how?</span>
                </h1>
                <p className={clsx('mgt-30')}>Explain sport gears using</p>
                <div className={clsx('mgt-30')}>
                    <div>title</div>
                    <div>searchBar</div>
                </div>
            </Col>
        </Row>
    );
};
