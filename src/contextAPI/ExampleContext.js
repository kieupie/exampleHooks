import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { AppProvider } from './Context/AppProvider';

function ExampleFunctional() {
  return (
    <div className='App'>
      <AppProvider>
        <Header />
        <Content />
        <Sidebar />
      </AppProvider>
    </div>
  );
}

export default ExampleFunctional;