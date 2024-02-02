import React, { useMemo, useState } from 'react'

function expensiveFunction(n) {
    console.log('Time starting');
    const start = new Date();

    while (new Date() - start < 3000) //3s ~ 3000

        console.log('Time ending', new Date() - start, 'ms')

    return n * n;
}

export default function ExampleFuntional() {
    const [count, setCount] = useState(0);
    const [n, setN] = useState(10);

    const number = useMemo(() => {
        return expensiveFunction(n)
    }, [n])

    return (
        <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-md mx-auto">
            <pre className="text-blue-500 font-semibold">Functional Component</pre>
            <div>
                <p className="font-bold mb-2">Number (n=10): {number}</p>
                <p className="font-bold mb-2">Count: {count}</p>
                <button
                    onClick={() => {
                        setCount(count + 1)
                    }}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Add
                </button>
            </div>
        </div>
    )
}

/**
 * Component bị re-render khi có sự thay đổi giá trị của state/props
 * Khi click Add button, làm thay đổi state của count
 * => component này sẽ bị re-render (thực thi lại toàn bộ code của component)
 * và cả expensiveFunction (mất nhiều thời gian)
 * và kết quả của expensiveFunction vẫn không thay đổi (gây ra dư thừa)
 * 
 * => Cần sử dụng useMemo, để tránh re-render lại function không cần thiết
 * (ở đây là expensiveFunction vì expensiveFunction này re-render lại bao nhiêu lần
 * cũng vẫn là một kết quả là 100) mà chỉ cần lấy trong bộ nhớ ra kết quả trả về
 * của lần thực thi trước đó của expensiveFunction và gán vào biến number
 * => tối ưu performance
 * 
 */