const Scheduler = (props) =>{
    const {scheduleData} = props;
    return (
        <div className="w-[100%] py-5 mt-10 border border-transparent rounded-2xl bg-white lg:w-[50%]">
        <div className='flex justify-between px-5'>
            <p className="text-[18px] font-[700]">Today’s schedule</p>
            <p className="text-[14px] font-[300] text-[#858585]">{'See All >'}</p>
        </div>

        {scheduleData.map(({ color, meeting, time, address },index) => {

            return (
                <div className="flex justify-start m-8" key={index+color}>
                    <div className={'w-0.5 p-1'} style={{ backgroundColor: color }}>
                    </div>
                    <div className="ml-4">
                        <p className="text-[#666666] font-[700] text-sm">{meeting}</p>
                        <p className="text-[12px] font-[300] text-[#858585]">{time}</p>
                        <p className="text-[12px] font-[300] text-[#858585]">{address} </p>
                    </div>

                </div>)
        }
        )}
    </div>
    )
}


export default Scheduler;