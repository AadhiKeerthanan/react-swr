import './App.css';
import useSWR from 'swr';
import { SWRConfig } from 'swr';
import Fact from './Fact';

const fetcher = (...args) => fetch(...args).then((res) => res.json()); 

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Fact />
    </SWRConfig>
  )
}

export default App;
