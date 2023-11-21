import React, { useState } from "react";
import { Options } from "../constant";

function Temperature() {
  const [inpVal, setInpVal] = useState("");
  const [output, setOutput] = useState("output");
  const handleConversion = (conversionFunction) => {
    const result = conversionFunction(parseFloat(inpVal));
    setOutput(result);
  };
  //funtion for calculation
  const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
  const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const celsiusToKelvin = (celsius) => celsius + 273.15;
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;
  const fahrenheitToKelvin = (fahrenheit) =>
    celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
  const kelvinToFahrenheit = (kelvin) =>
    celsiusToFahrenheit(kelvinToCelsius(kelvin));

  const HandelOnResult = () => {
    let from = document.getElementById("from");
    let to = document.getElementById("to");

    if (from.value === "celsius" && to.value === "fahrenheit") {
      handleConversion(celsiusToFahrenheit);
    } else if (from.value === "fahrenheit" && to.value === "celsius") {
      handleConversion(fahrenheitToCelsius);
    } else if (from.value === "celsius" && to.value === "kelvin") {
      handleConversion(celsiusToKelvin);
    } else if (from.value === "kelvin" && to.value === "celsius") {
      handleConversion(kelvinToCelsius);
    } else if (from.value === "fahrenheit" && to.value === "kelvin") {
      handleConversion(fahrenheitToKelvin);
    } else if (from.value === "kelvin" && to.value === "fahrenheit") {
      handleConversion(kelvinToFahrenheit);
    } else if(inpVal ==="" ){
      setOutput(' error please type valid input!')
    } else {
      setOutput(inpVal);
    }
  };
  return (


<div className="min-w-[200px] lg:w-[800px] sm:w-[400px] max-[375px]:h-[400px] max-xs:w-[380px] h-[450px]  max-[375px]:w-[310px] max-[375px]: bg-white shadow-md shadow-black/5">
<div className="h-[50px]  heading light-red-gradient flex text-white justify-around items-center  capitalize w-full">
  <div>from :</div>
  <div>to :</div>
</div>
<div className="flex flex-col  items-center h-full  w-full justify-around max-xs:justify-start max-xs:space-y-[34px] p-10 max-[375px]:p-4">
  {/* SELECT */}
  <div className="w-full flex  max-xs:justify-start  max-xs:space-x-10 justify-around min-h-[40px]">
    <select
      id="from"
      className="sm:w-[150px]  max-xs:w-[150px] rounded-sm  max-xs:text-sm lg:w-[300px] h-[40px] "
    >
            <optgroup label="Temperature">
              {Options.Temperature.map((e, index) => {
                return (
                  <option key={`from-tempertature-${index}`} value={e.value}>
                    {e.title}
                  </option>
                );
              })}
            </optgroup>
    </select>
    <select
      id="to"
      className="sm:w-[150px]  max-xs:w-[150px]  max-xs:text-sm lg:w-[300px] h-[40px] "
    >
            <optgroup label="Temperature">
              {Options.Temperature.map((e, index) => {
                return (
                  <option key={`to-tempertature-${index}`} value={e.value}>
                    {e.title}
                  </option>
                );
              })}
            </optgroup>
    </select>
  </div>
  <div className="flex items-center max-xs:flex-col  max-xs:items-start  max-xs:space-y-4  w-full justify-around ">
    <input
      id="input"
      placeholder="enter unit here..."
      type="text"
      value={inpVal}
      onChange={(e) => {
        setInpVal(e.target.value);
      }}
      className="bg-gray-200 lg:w-[300px]  placeholder:p-2 min-h-[40px] shadow-inner shadow-black/20 w-[200px]"
    />
  </div>
  <div
    id="output"
    className="output lg:w-[300px]  flex justify-center items-center bg-transparent min-h-[40px] w-[100px]"
  >
    { '= ' +output}
  </div>
  <button
    onClick={HandelOnResult}
    className="light-red-gradient  max-xs:w-[140px]  max-xs:h-[40px] px-4 py-1 text-white  hover:scale-95 rounded-md"
  >
    Convert
  </button>
</div>
</div>
  );
}

export default Temperature;
