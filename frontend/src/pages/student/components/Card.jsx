/* eslint-disable react/prop-types */
const Card = ({ title, image, email }) => {
    return (
        <div
            className='border w-full h-12 rounded'
        >
            <div className='flex items-center p-0.5 gap-2'>
                {image && <img
                    src={image}
                    alt={title}
                    className="size-9 rounded-full"
                />}
                <div>
                    <span className='font-medium text-sm'>{title}</span>
                    <p className='text-xs text-gray-500'>{email}</p>
                </div>
            </div>

        </div>
    )
}
export default Card