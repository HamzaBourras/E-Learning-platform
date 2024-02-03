/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const ProfessorChart = ({ data, columns }) => {
    const chartData = {
        labels: Object.keys(data),
        datasets: columns.map((column, index) => ({
            label: column.label,
            backgroundColor: column.backgroundColor,
            borderColor: column.borderColor,
            borderWidth: 1,
            data: Object.values(data).map((item) => item[column.key] || 0),
        })),
    };

    const chartOptions = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return (
        <div>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default ProfessorChart;