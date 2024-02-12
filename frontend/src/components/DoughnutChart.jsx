/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ labels, data, colors }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: colors.map(color => color.replace(/[^,]+(?=\))/, '0.6')),
                borderColor: colors.map(color => color.replace(/[^,]+(?=\))/, '1')),
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    };

    return (
        <div className='size-56'>
            <Doughnut data={chartData} options={chartOptions} />
        </div>
    );
};

export default DoughnutChart;