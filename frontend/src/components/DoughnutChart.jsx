/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const DashboardChart = ({ teacherCounter, studentCounter, departmentCounter, sectorCounter }) => {
    const chartData = {
        labels: ['Professors', 'Students', 'Departments', 'Sectors'],
        datasets: [
            {
                data: [teacherCounter, studentCounter, departmentCounter, sectorCounter],
                backgroundColor: [
                    'rgba(75,192,192,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(255,206,86,0.6)',
                    'rgba(54, 162, 235, 0.6)',
                ],
                borderColor: [
                    'rgba(75,192,192,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,206,86,1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        cutout: '70%', // Adjust the cutout to control the size of the hole in the center
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    };

    return (
        <div className='size-32'>
            <h2>Data Overview</h2>
            <Doughnut data={chartData} options={chartOptions} />
        </div>
    );
};

export default DashboardChart;