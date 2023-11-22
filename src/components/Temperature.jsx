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


<div className="min-w-[200px] lg:w-[800px] sm:w-[400px] max-[375px]:h-[400px] max-xs:w-[380px] h-[450px]  max-[375px]:w-[330px] max-[375px]: bg-white shadow-md shadow-black/5">
      <div className="flex flex-col  h-full  w-full  max-xs:justify-start  sm:items-end   sm:justify-end ">
        {/* SELECT */}
        <div className="w-full h-[80%] grid  max-sm:grid-cols-1 max-[375px]:p-5 max-sm:place-items-end grid-cols-2  p-10 min-h-[40px] ">
          <div className="flex  w-fit  items-center">
            <label htmlFor="from" className="text-gray-700 max-xs:text-sm p-2">
              from:
            </label>
            <select
              id="from"
              className="sm:w-[150px]  max-xs:w-[250px] rounded-sm  max-xs:text-sm lg:w-[300px] h-[40px] "
            >
              <optgroup label="Temperature">
                {Options.Temperature.map((e, index) => {
                  return (
                    <option key={`from-temperature-${index}`} value={e.value}>
                      {e.title}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>

          <div className="flex w-fit  items-center">
            <label htmlFor="to" className="text-gray-700  max-xs:text-sm  p-2">
              to:{" "}
            </label>
            <select
              id="to"
              className="sm:w-[150px]   max-xs:w-[250px]   max-xs:text-sm lg:w-[300px] h-[40px] "
            >
              <optgroup label="Temperature">
                {Options.Temperature.map((e, index) => {
                  return (
                    <option key={`to-temperature-${index}`} value={e.value}>
                      {e.title}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>

          <div className="flex w-fit  items-center">
            <div className="w-[52px]" />

            <input
              id="input"
              placeholder="enter unit here..."
              type="text"
              value={inpVal}
              onChange={(e) => {
                setInpVal(e.target.value);
              }}
              className="sm:w-[150px]   max-xs:w-[250px]   max-xs:text-sm lg:w-[300px] h-[40px] bg-gray-200 placeholder:p-2"
            />
          </div>

          <div className="flex w-fit  items-center">
            <div className="w-[38px]" />

            <div
              id="output"
              className="output w-full flex justify-center items-center sm:w-[150px]  max-xs:w-[250px] rounded-sm  max-xs:text-sm lg:w-[300px] h-[40px] bg-red "
            >
              {"= " + output}
            </div>
          </div>
        </div>
        <button
          onClick={HandelOnResult}
          className="light-red-gradient  max-xs:w-[140px] m-auto  max-xs:h-[40px] px-4 py-1 text-white  hover:scale-95 rounded-md"
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default Temperature;
