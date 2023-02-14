import { LoadingOutlined } from '@ant-design/icons';

const Icon = <LoadingOutlined style={{ fontSize: 35 }} spin />;

const Loading = () => {
    return (
        <div className="grid h-screen place-items-center">
            <button className="btn btn-square loading"></button>
        </div>
    );
};

export default Loading;
