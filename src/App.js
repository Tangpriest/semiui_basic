import { Button, Toast } from '@douyinfe/semi-ui';
import './App.css';

function App() {
  return (
    <div className="App">
       return <Button onClick={() => Toast.warning({ content: 'welcome' })}>Hello Semi</Button>;
    </div>
  );
}

export default App;
