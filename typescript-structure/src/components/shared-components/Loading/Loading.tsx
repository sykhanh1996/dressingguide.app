import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Icon = <LoadingOutlined style={{ fontSize: 35 }} spin />;

const Loading = () => {
    return (
        <div>
            <Spin indicator={Icon} />
        </div>
    );
};

export default Loading;
