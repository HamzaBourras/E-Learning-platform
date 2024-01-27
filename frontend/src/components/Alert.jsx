/* eslint-disable react/prop-types */
import classNames from "classnames"

const Alert = ({ color, message }) => {

    const success = classNames({
        'border-emerald-200': color=='success',
        'bg-emerald-50': color=='success',
        'text-emerald-500': color=='success',
    });


    return (
        <>
            <div
                className={`w-full px-2 py-3 text-sm border rounded ${success} `}
                role="alert"
            >
                <p>{message}</p>
            </div>
        </>
    )
}

export default Alert
