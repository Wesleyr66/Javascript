import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useLocalStorage(key, initialValue = '') {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Se encontrou o item, tenta fazer o parse
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.error('Erro ao fazer parse do item no localStorage:', e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedValue = JSON.stringify(value);
      window.localStorage.setItem(key, serializedValue);
    } catch (e) {
      console.error('Erro ao salvar item no localStorage:', e);
    }
  }, [key, value]);

  return [value, setValue];
}



function App() {
  const [count, setCount] = useState(0)
  return (
    <>


      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <button onClick={() => setCount((count) => count - 1)}>
            count is {count}
          </button>
          {count < 0 ? <p>salveeeee</p> : <p>oláaa</p>}
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
