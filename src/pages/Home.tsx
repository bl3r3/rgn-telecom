import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import reactLogo from "../assets/react.svg";
import "../App.css";

export const Home = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<DocumentData[]>([]);

  const addProd = async () => {
    const docRef = await addDoc(collection(db, "Products"), {
      name: "test",
      description: "lorem ipsum",
      price: 100,
    });
    console.log(docRef.id);
  };

  const getDoc = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"));
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducts(data);
  };

  useEffect(() => {
    getDoc();
  }, []);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <ul>
          {products.map((product, idx) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={addProd}>test</button>
    </div>
  );
};
