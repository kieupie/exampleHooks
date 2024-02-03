import React from 'react'
import { useFetch } from './hooks/useFetch'

export default function CustomHook() {
    const {
        data: users,
        isLoading,
        error,
    } = useFetch('https://reqres.in/api/users');

    if (error) {
        return 'Something wrong!!!';
    }

    console.log({ isLoading })

    return (
        <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-md mx-auto">
            {isLoading ? (
                <p className="text-blue-500">Loading...</p>
            ) : (
                <div>
                    {users.map((user) => (
                        <p key={user.id} className="text-gray-800 mb-2">
                            {user.first_name} {user.last_name}
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}
