import React, { useMemo, useState } from 'react';
import Some from './components/Some';
import './App.css';

function sum(a: number, b: number) {
  const begin = Date.now();
  while (1) {
    if (Date.now() - begin > 3000) {
      break;
    }
  }
  console.log('函数执行了');
  return a + b;
}

function App() {
  const [count, setCount] = useState(1);

  // let a = 123;
  // let b = 456;

  // if (count % 2 === 0) {
  //   a += count;
  // }
  // const result = useMemo(() => {
  //   return sum(a, b);
  // }, [a, b]);

  const someElm = useMemo(() => {
    return <Some a={10} b={20} />;
  }, [])

  return (
    <div className="App">
      <h1>App</h1>
      {/* <h2>result: {result}</h2> */}
      {someElm}
      <h3>{count}</h3>
      <button onClick={() => setCount(prevState => prevState + 1)}>点我</button>
    </div>
  );
}

export default App;
