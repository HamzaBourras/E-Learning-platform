const HomePage = () => {
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-2 px-3.5'>
            <div className="bg-red-300 lg:col-span-3">1</div>
            <div className="bg-red-300">2</div>
        </div>
    )
}

export default HomePage


/*
// const { isLoading, data, error } = useFetch('http://127.0.0.1:8000/api/posts/show');

{/* {isLoading && <Spinner />}
            {data &&
                <div className='flex gap-2 flex-wrap'>
                    {(data.students).map(i=>(
                    <div key={i.id} className='bg-red-300 max-w-28 text-center'>
                        <h1>{i.title}</h1>
                        <p className='text-xs'>{i.content}</p>
                    </div>
                    ))}
                </div>
            }

            {error && <Alert color="red" head={error.message} />} 
            
*/
