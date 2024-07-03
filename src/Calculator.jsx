import "./calculator.css";
import { useState, useEffect } from "react";

const Calculator = () => {
  // date object for footer
  const date = new Date();
  const myDateObj = date.getFullYear();
  // states
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      alert("Invalid Input");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleBack = () => {
    setInput(input.slice(0, -1));
  };

  // handling the dark mode
  const handleMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div className="nav-container w-full flex justify-center align-middle">
        <div className="row w-[80%] py-2 flex justify-between items-center border-b-[1px]">
          <h1 className="font-bold text-xl w-auto">
            CAL<span className="font-normal">APP</span>
          </h1>
          <button className="mode-button p-2 px-4" onClick={handleMode}>
            Switch Mode 🥨
          </button>
        </div>
      </div>
      <div className="main-container w-full flex justify-center align-middle">
        <div className="row w-[80%] py-5 flex justify-center align-middle flex-col">
          <h2 className="capitalize text-center mb-4">
            <span className="font-bold">calculator </span>app
          </h2>
          <div className="cal-container rounded-2xl py-5 w-full flex  justify-center items-center">
            <div className="row w-[80%] flex flex-wrap-reverse justify-between items-center gap-8">
              <div className="num-container bg-[#d9d9d949] rounded-lg p-4">
                <div className="flex justify-center items-center gap-1">
                  <button onClick={() => handleClick("7")}>7</button>
                  <button onClick={() => handleClick("8")}>8</button>
                  <button onClick={() => handleClick("9")}>9</button>
                  <button onClick={handleClear} className="btnSpread btnsign">
                    C
                  </button>
                </div>
                <div className="flex justify-center align-middle gap-1">
                  <button onClick={() => handleClick("4")}>4</button>
                  <button onClick={() => handleClick("5")}>5</button>
                  <button onClick={() => handleClick("6")}>6</button>
                  <button onClick={handleBack} className="btnSpread btnsign">
                    ←
                  </button>
                </div>
                <div className="flex justify-center align-middle gap-1">
                  <button onClick={() => handleClick("1")}>1</button>
                  <button onClick={() => handleClick("2")}>2</button>
                  <button onClick={() => handleClick("3")}>3</button>
                  <button
                    onClick={() => handleClick("**")}
                    className="btnSpread btnsign"
                  >
                    ^
                  </button>
                </div>
                <div className="flex justify-center align-middle gap-1">
                  <button onClick={() => handleClick(".")} className="btnsign">
                    .
                  </button>
                  <button onClick={() => handleClick("0")}>0</button>
                  <button onClick={() => handleClick("%")} className="btnsign">
                    %
                  </button>
                  <button
                    onClick={() => handleClick("/")}
                    className="btnSpread btnsign"
                  >
                    ÷
                  </button>
                </div>
                <div className="flex justify-center align-middle gap-1">
                  <button onClick={() => handleClick("+")} className="btnsign">
                    +
                  </button>
                  <button onClick={() => handleClick("-")} className="btnsign">
                    -
                  </button>
                  <button onClick={() => handleClick("*")} className="btnsign">
                    ×
                  </button>
                  <button
                    onClick={handleCalculate}
                    className="calculatebtn btnSpread btnsign"
                  >
                    =
                  </button>
                </div>
              </div>
              {/* <hr className="bg-black w-3 h-1" /> */}
              <div className="user-container py-4 flex justify-center align-middle gap-6">
                <div className="w-96 input  ">
                  <h2 className="text-2xl font-bold capitalize mb-2">input</h2>
                  <input type="text" value={input} placeholder="" />
                </div>
                <div className="w-96 result ">
                  <h2 className="text-2xl font-bold capitalize mb-2">result</h2>
                  <div className="show-result">{result}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="footer backdrop-blur-xl">preeti@{myDateObj}</p>
    </>
  );
};

export default Calculator;
