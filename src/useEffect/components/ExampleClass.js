import React, { Component } from 'react'

export default class ExampleClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      action: '',
      result: null,
      scrollPosition: 0,
    };
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
    console.log('componentDidMount');

    document.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Count: ${this.state.count}`;
      console.log('componentDidUpdate (count)');
    }

    if (prevState.action !== this.state.action && this.state.action) {
      fetch(`https://reqres.in/api/${this.state.action}`)
        .then(response => response.json())
        .then(data => {
          console.log({ data });
          this.setState({ result: data?.data });
        })
        .catch(err => console.log({ err }));
      console.log('componentDidUpdate (action)');
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollPosition: window.scrollY });
  };

  render() {
    const { count, action, result, scrollPosition } = this.state;

    return (
      <div className=" bg-gray-100 p-6 rounded-md shadow-md max-w-md mx-auto">
        <div className="text-blue-500 font-semibold">Class Component</div>
        <div className='fixed bottom-0 mb-2 right-2 bg-white p-2 rounded-md shadow-md'>
          Position 2: {scrollPosition}
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <p className="font-bold mb-2">Count: {count}</p>
            <button
              onClick={() => this.setState({ count: count + 1 })}
              className="bg-blue-500 text-white px-3 py-2 rounded-md mr-2 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700"
            >
              Increase
            </button>
            <div className='flex mt-2'>
              <button
                onClick={() => this.setState({ action: 'comments' })}
                className="bg-blue-500 text-white px-3 py-2 rounded-md mr-2 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700"
              >
                Get Comments
              </button>
              <button
                onClick={() => this.setState({ action: 'user' })}
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
    );
  }
}
