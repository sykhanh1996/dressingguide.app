import { DribbbleOutlined, GithubOutlined, SkypeOutlined, TwitterOutlined } from '@ant-design/icons';
import { Col, Divider, Row, Space } from 'antd';
import Search from 'antd/es/input/Search';
import clsx from 'clsx';
import { Fragment } from 'react';
import styles from './Main.module.scss';

export const Main = () => {
    const onSearch = (value: string) => console.log(value);

    return (
        <Fragment>
            <Row justify="center" className={clsx(styles.main)} style={{ backgroundColor: '#fff' }}>
                <Col span={8}>
                    <Space direction="vertical">
                        <h1>
                            <span>SportGear</span>
                            <span>.</span>
                            <span>how?</span>
                            <GithubOutlined style={{ fontSize: 15 }} />
                        </h1>
                        <p>Explain sport gears using</p>
                    </Space>

                    <div className={clsx('mgt-30', styles.search)}>
                        <Row justify="start">
                            <Col span={4}>
                                <Space direction="horizontal">
                                    <GithubOutlined style={{ fontSize: 15 }} />
                                    <DribbbleOutlined style={{ fontSize: 15 }} />
                                    <SkypeOutlined style={{ fontSize: 15 }} />
                                </Space>
                            </Col>
                            <Col span={4} offset={16}>
                                <Space direction="horizontal">
                                    <GithubOutlined style={{ fontSize: 15 }} />
                                    <DribbbleOutlined style={{ fontSize: 15 }} />
                                    <SkypeOutlined style={{ fontSize: 15 }} />
                                </Space>
                            </Col>
                        </Row>
                        {/* <div className={clsx(styles.searchTitle)}>
                                <GithubOutlined style={{ fontSize: 15 }} />
                            </div> */}

                        <Divider orientation="center" plain style={{ marginTop: 0, color: '#141414' }}>
                            Search
                        </Divider>
                        <Space direction="vertical">
                            <div className={clsx(styles.searchBar)}>searchBar</div>
                        </Space>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};
