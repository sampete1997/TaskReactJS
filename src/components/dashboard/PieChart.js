import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: 'Top Product',
      data: [20, 27, 53,],
      backgroundColor: [
        '#EE8484',
        '#F6DC7D',
        '#98D89E',
      ],
      borderColor: [
        '#EE8484',
        '#F6DC7D',
        '#98D89E',
      ],
      borderWidth: 1,
    },
  ],
};
const options = {

    plugins: {
        title: {
            display: true,
            text: 'Top Products',
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
        position: 'right',
        labels: {
            textAlign: 'center',
            usePointStyle: true,
            boxWidth: 6,
            font: {
                size: 8
            },
            padding: 20,

        }
      },
      
    },
  };

export function PieChart() {
  return (
    <div className='flex justify-between'>
  <Pie data={data} options={options}/>
  <div>
    {<div className='bg-pink-500 align-middle h-[100%]'>
        <p className='bg-[#EE8484]'>Legend-1</p>
        <p className='EE8484'>Legend-1</p>
        <p className='EE8484'>Legend-1</p>

        </div>
    }
  </div>
  </div>
  )
}
