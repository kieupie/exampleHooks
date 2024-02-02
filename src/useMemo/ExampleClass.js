import React, { Component } from 'react'

export default class ExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      n: 10,
      number: this.expensiveFunction(10)
    };
  }

  expensiveFunction = (n) => {
    console.log('Time starting');
    const start = new Date();

    while (new Date() - start < 1000) //3s ~ 3000

      console.log('Time ending', new Date() - start, 'ms');

    return n * n;
  };

  shouldComponentUpdate(nextProps, nextState) {
    // Chỉ re-render khi có sự thay đổi trong count hoặc n
    return (
      nextState.count !== this.state.count ||
      nextState.n !== this.state.n
    );
  }

  render() {
    const { count, number } = this.state;

    return (
      <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-md mx-auto">
        <pre className="text-blue-500 font-semibold">Class Component</pre>
        <div>
          <p className="font-bold mb-2">Number (n=10): {number}</p>
          <p className="font-bold mb-2">Count: {count}</p>
          <button
            onClick={() => {
              this.setState((prevState) => ({
                count: prevState.count + 1
              }));
            }}
            className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
