/* eslint-disable react/prop-types */
const CardImage = ({ image, title }) => {
    return (
        <div className="flex items-center space-x-4 p-2 m-1 w-full bg-blue-50 bg-opacity-15 rounded-md border">
            <img
                className='w-20'
                src={image}
            />
            <h1 className='font-semibold text-2xl text-blue-600'>{ title }</h1>
        </div>
    )
}
export default CardImage