import { LoadingOutlined } from '@ant-design/icons';
import { ImSpinner } from 'react-icons/im';

const Icon = <LoadingOutlined style={{ fontSize: 35 }} spin />;

const Loading = () => {
    return (
        <div className="mt-16 flex items-center justify-center">
            <ImSpinner className="animate-spin" />
        </div>
    );
};

export default Loading;
