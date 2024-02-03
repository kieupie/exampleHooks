import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action) {
        case 'Increase':
            return state + 1;
        case 'Decrease':
            return state - 1;
        case 'Reset':
            return 0;
        default:
            return state;
    }

}

const initState = {
    loading: false,
    data: [],
    error: null,
}

const reducerUser = (state, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                loading: true,
            };
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case 'GET_USER_ERROR':
            return {
                ...state,
                data: [],
                error: action.data
            }
        default:
            return state;
    }

}

export default function ExampleFunctional() {

    const [count, dispatch] = useReducer(reducer, 0);
    const [user, dispatchUser] = useReducer(reducerUser, initState);

    const getUser = () => {
        dispatchUser({
            type: 'GET_USER'
        });

        setTimeout(() => {
            fetch(`https://reqres.in/api/users`)
                .then(response => response.json())
                .then(data => {
                    console.log({ data });
                    dispatchUser({
                        type: 'GET_USER_SUCCESS',
                        data: data
                    });
                })
                .catch(err => {
                    console.log({ err })
                    dispatchUser({
                        type: 'GET_USER_ERROR',
                        data: err
                    });
                });
        }, 2000)
    }

    return (
        <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-md mx-auto">
            <pre className="text-blue-500 font-semibold">Functional Component</pre>
            <div>
                <p className="font-bold mb-2 text-xl">Count: {count}</p>
                <button
                    onClick={() => {
                        dispatch('Decrease');
                    }}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 mr-2"
                >
                    Decrease
                </button>

                <button
                    onClick={() => {
                        dispatch('Reset');
                    }}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 mr-2"
                >
                    Reset
                </button>

                <button
                    onClick={() => {
                        dispatch('Increase');
                    }}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Increase
                </button>
            </div>

            <div>
                <pre className="font-semibold mt-2">GET list user</pre>
                <button onClick={getUser}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Get user
                </button>
                {user.loading ? <p>Loading...</p> : (
                    <div className='mt-2 overflow-auto max-h-[200px]'>
                        <pre className="bg-gray-200 p-2 rounded-md mt-2">
                            {JSON.stringify(user, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    )
}

/**
 * ACTION
 * là object/string
 * ví dụ: Action là một string là: 'ADD_NEW_ITEM'
 * 
 * VIEW (UI):
 * Event handler khi click button => dispatch action (ví dụ: 'ADD_NEW_ITEM')
 * 
 * REDUCER
 * là function có 2 tham số là state và action
 * ví dụ: REDUCER (state, action) => {
 *          switch(action) {
 *              case 'ADD_NEW_ITEM':
 *                      state = state + 1;
 *                      break;
 *              case 'MORE_ACTIONs':
 *                      state = state + 2;
 *                      break;
 *              default:
 *          }
 *      }
 * 
 * 
 * 
 * Trường hợp sử dụng:
 * Ví dụ có thể sử dụng để hiển thi icon loading
 */

