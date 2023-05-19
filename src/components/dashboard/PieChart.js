import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { randomColors } from '../../FakeJson/fakeApi';
import { FetctedApiContext } from '../ContextFetchedData';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = (fetchedData) => {
    return {
        labels: [],
        datasets: [
            {
                label: 'Top Product',
                data: fetchedData.map((ele) => ele.price) || [],
                backgroundColor: randomColors,
                borderColor: randomColors,
                borderWidth: 1,
            },
        ],
    }
}
const options = {

    plugins: {
        title: {
            display: true,
        },
        legend: {
            position: 'right',
            labels: {
                textAlign: 'center',
                usePointStyle: true,
                boxWidth: 6,
                font: {
                    size: 8
                },
                padding: 0,

            }
        },

    },
};

export function PieChart() {

    const {fakeData, total} = useContext(FetctedApiContext)

    return (
        <div className="w-[60%] lg:w-[80%] h:[50%] border border-transparent rounded-2xl flex">
            <div className='w-full sm:flex-col sm:flex lg:flex-row justify-between items-center'>

                <div className=' w-2/3 lg:h-[30vh]'><Pie data={data(fakeData)} options={options} /></div>
                    <div className='h-[100%]'>

                        {fakeData.map(({ price, id, title }, index) => {
                            return (<div className='flex justify-center items-center' key={index+title}>
                                <div className='w-3 h-3 rounded-full m-2' style={{ backgroundColor: randomColors[index] }}></div>
                                <div>
                                    <p className=' text-[14px] font-[700] mt-5'>{title.slice(0,10)}</p>
                                    <p className='font-[400] text-[14px]'>{Math.ceil((price * 100) / total)}%</p>
                                </div>
                            </div>)
                        })
                        }

                    </div>
            </div>
        </div>
    )
}
