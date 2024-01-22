// eslint-disable-next-line react/prop-types
const Alert = ({color , head, body}) => {
    
    return (
        <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className={`flex justify-between p-4 rounded-md bg-red-100 border border-red-300`}>
                <div className="flex gap-3">
                    <div className="self-center">
                        <span className={`font-medium text-red-600`}>
                            {head}
                            
                        </span>
                        <div className={`text-red-600`}>
                            <p className="mt-2 sm:text-sm">
                                {body}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert;