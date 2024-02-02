import './App.css';

import ExampleFunctionState from './useState/components/ExampleFunctional'
import ExampleClassState from './useState/components/ExampleClass'

import ExampleFunctionEffect from './useEffect/components/ExampleFunctional'
import ExampleClassEffect from './useEffect/components/ExampleClass'

import ExampleFuntionalMemo from './useMemo/ExampleFunctional';
import ExampleClassMemo from './useMemo/ExampleClass';


function App() {
  return (
    <div className="grid grid-cols-1 items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md space-y-6">
        <p className="text-3xl font-extrabold text-center mb-6">useState Examples</p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <ExampleFunctionState />
          <ExampleClassState />
        </div>
      </div>

      <div className="bg-white p-8 rounded-md shadow-md space-y-6">
        <p className="text-3xl font-extrabold text-center mb-6">useEffect Examples</p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <ExampleFunctionEffect />
          <ExampleClassEffect />
        </div>
      </div>

      <div className="bg-white p-8 rounded-md shadow-md space-y-6">
        <p className="text-3xl font-extrabold text-center mb-6">useMemo Examples</p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <ExampleFuntionalMemo />
          <ExampleClassMemo/>
        </div>
      </div>

    </div>
  );
}

export default App;
