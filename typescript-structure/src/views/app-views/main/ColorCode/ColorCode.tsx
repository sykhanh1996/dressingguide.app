import { Fragment, memo } from 'react';

const ColorCode = (props: any) => {
    return (
        <Fragment>
            <span className="text-xl text-gray-900 min-w-[100px]">Your Main Color: </span>
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-md w-full max-w-xs text-xl"
                value={props.colorRadioCheckedValue}
                readOnly
            />
        </Fragment>
    );
};

export default memo(ColorCode);
