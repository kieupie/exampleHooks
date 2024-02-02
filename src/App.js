import './App.css';

import ExampleFunctionState from './useState/ExampleFunctional'
import ExampleClassState from './useState/ExampleClass'

import ExampleFunctionEffect from './useEffect/ExampleFunctional'
import ExampleClassEffect from './useEffect/ExampleClass'

import ExampleFuntionalMemo from './useMemo/ExampleFunctional';
import ExampleClassMemo from './useMemo/ExampleClass';

import ExampleFuntionalCallback from './useCallback/ExampleFunctional';
import ExampleClassCallback from './useCallback/ExampleClass';


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

      <div className="bg-white p-8 rounded-md shadow-md space-y-6">
        <p className="text-3xl font-extrabold text-center mb-6">useCallback Examples</p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <ExampleFuntionalCallback />
          <ExampleClassCallback/>
        </div>
      </div>

    </div>
  );
}

export default App;
