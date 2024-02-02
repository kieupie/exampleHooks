import React, { useEffect, useState } from 'react'

export default function ExampleFunctional() {
    const [count, setCount] = useState(0);
    const [action, setAction] = useState('');
    const [result, setResult] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log('useEffect (user)')

        return () => {
            console.log('useEffect (user) - cleanup');
        }
    }, [count]);

    useEffect(() => {
        if (action) {
            fetch(`https://reqres.in/api/${action}`)
                .then(response => response.json())
                .then(data => {
                    console.log({ data });
                    setResult(data?.data);
                })
                .catch(err => console.log({ err }));
            console.log('useEffect (action)');
        }
        return () => {
            console.log('useEffect (action) - cleanup');
        }
    }, [action]);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    }

    useEffect(() => {
        //~ componentDidMount()
        document.addEventListener('scroll', handleScroll)

        return () => {
            //~ componentWillMount()
            document.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className=" bg-gray-100 p-6 rounded-md shadow-md max-w-md mx-auto">
            <div className="text-blue-500 font-semibold">Functional Component</div>
            <div className='fixed bottom-12 mb-2 right-2 bg-white p-2 rounded-md shadow-md'>
                Position 1: {scrollPosition}
            </div>

            <div className="flex justify-between mt-4">
                <div>
                    <p className="font-bold mb-2">Count: {count}</p>
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-blue-500 text-white px-3 py-2 rounded-md mr-2 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700"
                    >
                        Increase
                    </button>
                    <div className='flex mt-2'>
                        <button
                            onClick={() => setAction('comments')}
                            className="bg-blue-500 text-white px-3 py-2 rounded-md mr-2 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700"
                        >
                            Get Comments
                        </button>
                        <button
                            onClick={() => setAction('user')}
                            className="bg-blue-500 text-white px-3 py-2 rounded-md mr-2 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700"
                        >
                            Get User
                        </button>
                    </div>
                    <div>
                        {action && (
                            <div className="mt-2">Action: {action}</div>
                        )}
                        <pre className="font-semibold mt-2">Result from API</pre>
                        {result && (
                            <pre className="bg-gray-200 p-2 rounded-md mt-2">
                                {JSON.stringify(result, null, 2)}
                            </pre>
                        )}
                    </div>


                </div>
            </div>
        </div>
    )
}


/**
 * useEffect hoạt động tương tự các Lifecycle như
 * componentDidMount, componentDidUpdate trong Class Component 
 * 
 * truyền vào useEffect biến count
 * để useEffect chỉ được re-render lại khi biến count này thay đổi
 *     useEffect(() => {
 *          document.title = `Count: ${count}`;
 *          console.log('useEffect');
 *      }, [count]);
 * 
 * nên khi nhấn Increase button  => useEffect được gọi vì count thay đổi
 * với Get User /Get Comments => useEffect không được gọi vì count không thay đổi, chỉ có action
 */
