import { LoadingOutlined } from '@ant-design/icons';
import { ImSpinner } from 'react-icons/im';

const Icon = <LoadingOutlined style={{ fontSize: 35 }} spin />;

const LoadingFullScreen = () => {
    return (
        <div className="grid h-screen place-items-center">
            <ImSpinner className="animate-spin" />
        </div>
    );
};

export default LoadingFullScreen;
