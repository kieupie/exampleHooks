import React, { useEffect, useState } from 'react'

export default function ChildComponent({ getData }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        console.log('ChildComponent - useEffect - getData');

        getData('comments')
            .then((res) => res.json())
            .then((res) => {
                const comments = res.data;
                setComments(comments);
            })
    }, [getData])


    return (
        <div className='my-2'>
            <pre className="font-semibold mt-5">Result from API ChildComponent (comments)</pre>
            <div className='max-h-[200px] overflow-auto'>
                {comments && (
                    <div className="bg-gray-200 p-2 rounded-md overflow-auto">
                        {JSON.stringify(comments)}
                    </div>
                )}
            </div>
        </div>
    )
}
