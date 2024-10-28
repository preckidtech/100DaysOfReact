import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("")

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <>
      <section className="bg-pink-800 p-4 m-auto mt-52 w-3/5 rounded-lg grid justify-center place-items-center">
<h1 className="text-xl font-bold m-5 text-black text-center">ADVISE APP GENERATOR</h1>
        <h2 className="text-white text-lg">{advice}</h2>
        <button
          onClick={getAdvice}
          className="border-2 border-black rounded-lg text-white bg-blue-500 py-2 px-4"
        >
          Get Advise
        </button>
      </section>
    </>
  );
}
