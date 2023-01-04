export const MainSecond = () => {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4" style={{ width: 300 }}>
            <div className="row-start-2 row-span-2 bg-orange-100">01</div>
            <div className="col-span-2 bg-amber-300">02</div>
            <div className="row-span-2 col-span-2 bg-green-400">03</div>
        </div>
    );
};
