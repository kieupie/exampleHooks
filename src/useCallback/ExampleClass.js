import React, { Component } from 'react'
import ChildComponent from './components/ChildComponent'

export default class ExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.getData = this.getData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getData(type) {
    return fetch(`https://reqres.in/api/${type}`);
  }

  handleClick() {
    this.getData('users')
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        this.setState({ users });
      });
  }

  render() {
    const { users } = this.state;

    return (
      <div className=" bg-gray-100 p-6 rounded-md shadow-md max-w-md mx-auto">
        <div className="text-blue-500 font-semibold">Class Component</div>
        <button
          onClick={this.handleClick}
          className="bg-blue-500 text-white px-3 py-2 rounded-md mr-2 mt-4 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Get User
        </button>
        <div className="flex justify-between mt-4 overflow-auto">
          <div className='grid'>
            <ChildComponent getData={this.getData} />

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
    );
  }
}
