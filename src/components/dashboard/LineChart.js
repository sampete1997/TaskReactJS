import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { FetctedApiContext } from '../ContextFetchedData';
import { randomColors } from '../../FakeJson/fakeApi';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                drawBorder: false, // <-- this removes y-axis line
                lineWidth: 0.5,
            }
        },

        x: {
            grid: {
                display: false
            },
            ticks: {
                callback: (value, index, values) => {
                    if (index === 0) {
                        return '';
                    }

                    return labels[value - 1];
                },
            },
        },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: "top",
            align: "end",
            display: false,
            labels: {
                usePointStyle: true,
                boxWidth: 10,
                font: {
                    size: 9
                },
                padding: 10,

            }
        },
    },
};

const labels = ['Week-1', 'Week-2', 'Week-3', 'Week-4',];

export const data = (fakeData) => {
    return {
        labels,
        datasets: fakeData.map((ele, index) => {
            return ({
                label: ele.title,
                data: fakeData.map(({ price, id }) => ele.price * (ele.price % price)  ),
                borderColor: randomColors[index],
                backgroundColor: randomColors[index], 
                tension: 0.3,
                pointRadius: 0,
            })
        }
        ),
    }
};

export function LineChart() {

    const { fakeData } = useContext(FetctedApiContext)
    console.log('fake', fakeData);
    return (
        <div className='h-[40vh]'>
            <Line options={options} data={data(fakeData)} />
        </div>
    )
}