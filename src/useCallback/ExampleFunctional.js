import React, { useCallback, useState } from 'react'
import ChildComponnet from './components/ChildComponent';

export default function ExampleFunctional() {
    const [users, setUsers] = useState([]);

    const getData = useCallback((type) => {
        return fetch(`https://reqres.in/api/${type}`);
    }, []);

    const handleClick = () => {
        getData('users')
            .then((res) => res.json())
            .then((res) => {
                const users = res.data;
                setUsers(users);
            })
    };


    return (
        <div className=" bg-gray-100 p-6 rounded-md shadow-md max-w-md mx-auto">
            <div className="text-blue-500 font-semibold">Functional Component</div>
            <button
                onClick={handleClick}
                className="bg-blue-500 text-white px-3 py-2 rounded-md mr-2 mt-4 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700"
            >
                Get User
            </button>
            <div className="flex justify-between mt-4 overflow-auto">
                <div className='grid'>
                    <ChildComponnet getData={getData} />

                    <div className='my-2'>
                        <pre className="font-semibold mt-5">Result from API (users)</pre>
                        <div className='max-h-[200px]'>
                            {users && (
                                <div className="bg-gray-200 p-2 rounded-md overflow-auto">
                                    {JSON.stringify(users)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


/**
 * Khi click Get Users button thì handleClick call API với user
 * và ngoài ra API comment được call (không cần thiết) mặc dù
 * không có sự thay đổi về getData (vì getData là một function là không thay đổi giá trị)
 * nhưng API comment vẫn bị thực thi lại
 * 
 * Nguyên nhân: trong ExampleFunction khi thực hiện setUsers ở handleClick thì
 * state của users bị thay đổi và ExampleFunction bị re-render
 * vì vậy tất cả đoạn code bị thực thi lại, kể cả getData function
 * 
 * khi getData re-reder lại thì
 * getData được gán một function là tham chiếu đến một vùng nhớ khác
 * => getData bị thay đổi => thay đổi getData được truyền vào ChildComponent
 * => useEffect (comments) ở ChildComponent bị rendered (mặc dù chỉ mới click handleClick và lấy ra ds User ở ExampleFunction)
 * 
 * ==> Cần useCallback để giải quyết,
 * để getData tham chiếu đến cùng một vùng nhớ (khi re-render)
 * 
 * 
 * 
 * 
 * 
 * 
 * Tuy nhiên: Trong JS khi thực hiện gán một biến bằng
 * một function, array, object thì đươcn hiểu là một tham chiếu
 * chứ không là tham trị
 * 
 * Tham trị:
 * let a=3
 * let b=3
 * so sánh: a === b // true so sánh giá trị của biến a, b
 * 
 * 
 * Tham chiếu
 * nhưng đối với: object, array, function
 * let a = (type) => {
        return fetch(`https://reqres.in/api/${type}`);
    };
 * let b = (type) => {
        return fetch(`https://reqres.in/api/${type}`);
    }; 

 * so sánh: a === b // false
 * không gán giá trị của biến a, b
 * mà chỉ gán một dịa chỉ ở trong bộ nhớ
 * a, b tham chiếu đến hai vùng nhớ khác nhau
 * nên khi thực hiện so sánh, sẽ cho kết quả là false
 */