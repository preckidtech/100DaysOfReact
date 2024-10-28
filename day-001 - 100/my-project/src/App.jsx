import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");

  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <>
      <section className="bg-pink-800 p-4 m-auto mt-52 w-3/5 rounded-lg grid justify-center place-items-center">
        <h1 className="text-xl font-bold m-5 text-black text-center">
          ADVISE APP GENERATOR
        </h1>
        <h2 className="text-white text-lg">{advice}</h2>
        <button
          onClick={getAdvice}
          className="border-2 border-black rounded-lg text-white bg-blue-500 py-2 px-4 my-3"
        >
          Get Advise
        </button>
        <Message count={count} />
      </section>
    </>
  );
}

function Message(props) {
  return (
    <p>
      You have read <span className="text-white">{props.count}</span> pieces of advice
    </p>
  );
}
