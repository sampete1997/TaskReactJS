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
import { Line } from 'react-chartjs-2';


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
        title: {
            display: true,
            text: 'My Chart Title',
            align: 'start',
            position: 'top',
            font: {
                size: 16,
                weight: 'bold',
            },
            padding: {
                top: 10,
                bottom: 10,
            },
        },

        legend: {
            position: "top",
            align: "end",
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

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [100, 145, 502, 320,],
            borderColor: '#9BDD7C',
            backgroundColor: '#9BDD7C',
            tension: 0.3,
            pointRadius: 0,
        },
        {
            label: 'Dataset 2',
            data: [140, 399, 235, 532],
            borderColor: '#E9A0A0',
            backgroundColor: '#E9A0A0',
            tension: 0.3,
            pointRadius: 0,
        },
    ],
};

export function LineX() {
    return <Line options={options} data={data} />;
}