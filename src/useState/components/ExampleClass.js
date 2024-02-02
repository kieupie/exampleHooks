import React, { Component } from 'react'

export default class ExampleClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            user: {
                name: 'User',
                age: 10,
            }
        }
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleClickUser = () => {
        this.setState({ user: { ...this.state.user, name: 'New User' } });
    };

    render() {
        return (
            <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-md mx-auto">
                <pre className="text-blue-500 font-semibold">Class Component</pre>
                <p className="font-bold mb-4">Count: {this.state.count}</p>
                <button
                    onClick={this.handleClick}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Click me
                </button>

                <div className="mt-4">
                    <pre className="font-semibold">Update state (user)</pre>
                    <p className="text-sm mb-2">{JSON.stringify(this.state.user)}</p>
                    <button
                        onClick={this.handleClickUser}
                        className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Update
                    </button>
                </div>
            </div>
        );
    }
}



/** Note
 * Khi thực hiện setState thì giá trị của state đó sẽ merge
 * với giá trị mới
 */