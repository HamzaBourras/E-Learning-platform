/* eslint-disable react/prop-types */
import { Progress } from "@nextui-org/react"

const ProgressComponent = ({image,name ,number, maxNumber, color }) => {
    return (
        <div className="border p-2 shadow-sm text-lg h-20 rounded-md flex flex-col justify-center space-y-1">
            <div className='flex items-center space-x-1'>
                <img src={image} width={40} />
                <h1 className="text"><span className="">{number} {name}</span></h1>
            </div>
            <div className='flex items-center -z-20'>
                <Progress
                    color={color}
                    aria-label="Loading..."
                    maxValue={maxNumber}
                    value={number}
                    className="max-w-md"
                />
            </div>
        </div>
    )
}

export default ProgressComponent