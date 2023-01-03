import { Col, Divider, Row } from 'antd';
import clsx from 'clsx';
import { Fragment } from 'react';
import styles from './Main.module.scss';

export const Main = () => {
    return (
        <Fragment>
            <Row justify="center" className={clsx(styles.main)} style={{ backgroundColor: '#fff' }}>
                <Col span={16}>
                    <h1>
                        <span>SportGear</span>
                        <span>.</span>
                        <span>how?</span>
                    </h1>
                    <p className={clsx('mgt-30')}>Explain sport gears using</p>
                    <div className={(clsx('mgt-30'), styles.search)}>
                        <div>Search</div>
                        <div>searchBar</div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};
