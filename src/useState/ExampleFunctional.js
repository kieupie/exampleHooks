import React, { useState } from 'react';

export default function ExampleFunction() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [user, setUser] = useState({
        name: 'User',
        age: 10,
    });



    const handleClick1 = () => {
        setCount1(count1 + 1);
    };

    const handleClick2 = () => {
        setCount2((prevState) => { return prevState + 1 });
        setCount2((prevState) => { return prevState + 1 });
    };

    const handleClickUser = () => {
        setUser(
            {
                name: 'New User',
            }
        )
    };

    return (
        <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-md mx-auto">
            <pre className="text-blue-500 font-semibold">Functional Component</pre>

            <div className="grid grid-cols-2 gap-2 mb-4">
                <div>
                    <p className="font-bold mb-2">Count: {count1}</p>
                    <button
                        onClick={handleClick1}
                        className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Increase(1)
                    </button>
                </div>

                <div>
                    <p className="font-bold mb-2">Count: {count2}</p>
                    <button
                        onClick={handleClick2}
                        className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Increase(2)
                    </button>
                </div>
            </div>

            <pre className="font-semibold">Update state (user)</pre>
            <div>
                <p className="text-sm mb-2">{JSON.stringify(user)}</p>
                <button
                    onClick={handleClickUser}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Update
                </button>
            </div>

        </div>
    );
}


/** Note
 * const [count, setCount] = useState(0);
 * - state nhận vào 2 tham số, giá trị mặc định 0
 * useState này trả về một array với 2 phần từ:
 *      + Tên của state (count)
 *      + Method để cập nhật lại giá trị cho state này (setCount)
 * - khi thực hiện setState thì giá trị của state đó sẽ bị thay thế (overwrite)
 * bằng giá trị mới chứ không phải là merge hai giá trị lại với nhau
 * rất khác so với việc setState ở trong một Class component.
 * 
 * Lưu ý:
 * Khi tạo initialValue từ một function phức tạp như sau:
 * const initialValue = () => {
 *     console.log("Generating Initial Value");
 *      return Math.floor(Math.random() * 100);
 * };
 * 
 * thì thay vì truyền trực tiếp giá trị cho useState,
 * nên sử dụng arrow funtion để function của initialValue sẽ không bị gọi lại
 * const [count, setCount] = useState(() => {
 *      return initialValue();
 * });
 */
