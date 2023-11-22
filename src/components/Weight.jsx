import React, { useState } from "react";
import { Options } from "../constant";
const Weight = () => {
  const [inpVal, setInpVal] = useState("");
  const [output, setOutput] = useState("output");

  const handleWeightConversion = (conversionFunction) => {
    const result = conversionFunction(parseFloat(inpVal));
    setOutput(result);
  };

  // Functions for weight calculation
  const kilogramToGram = (kilogram) => kilogram * 1000;
  const kilogramToPound = (kilogram) => kilogram * 2.20462;
  const kilogramToMilligram = (kilogram) => kilogram * 1000000;
  const gramToKilogram = (gram) => gram / 1000;
  const gramToPound = (gram) => gram / 453.592;
  const poundToKilogram = (pound) => pound / 2.20462;
  const poundToGram = (pound) => pound * 453.592;
  const milligramToGram = (milligram) => milligram * 0.001;
  const milligramToPound = (milligram) => milligram * 0.0000022046;
  const milligramToKilogram = (milligram) => milligram / 1000000;
  const PoundToMilligram = (milligram) => milligram * 453592;
  const gramToMilligram = (milligram) => milligram * 1000;
  //   const ToMilligram =(milligram) => milligram / 1000000;

  const HandelOnResult = () => {
    let from = document.getElementById("from");
    let to = document.getElementById("to");

    if (from.value === "kilogram" && to.value === "gram") {
      handleWeightConversion(kilogramToGram);
    } else if (from.value === "kilogram" && to.value === "pound") {
      handleWeightConversion(kilogramToPound);
    } else if (from.value === "kilogram" && to.value === "milligram") {
      handleWeightConversion(kilogramToMilligram);
    } else if (from.value === "gram" && to.value === "kilogram") {
      handleWeightConversion(gramToKilogram);
    } else if (from.value === "gram" && to.value === "milligram") {
      handleWeightConversion(gramToMilligram);
    } else if (from.value === "gram" && to.value === "pound") {
      handleWeightConversion(gramToPound);
    } else if (from.value === "pound" && to.value === "kilogram") {
      handleWeightConversion(poundToKilogram);
    } else if (from.value === "pound" && to.value === "gram") {
      handleWeightConversion(poundToGram);
    } else if (from.value === "pound" && to.value === "milligram") {
      handleWeightConversion(PoundToMilligram);
    } else if (from.value === "milligram" && to.value === "gram") {
      handleWeightConversion(milligramToGram);
    } else if (from.value === "milligram" && to.value === "kilogram") {
      handleWeightConversion(milligramToKilogram);
    } else if (from.value === "milligram" && to.value === "pound") {
      handleWeightConversion(milligramToPound);
    } else if (from.value === "milligram" && to.value === "gram") {
      handleWeightConversion(milligramToGram);
    } else if(inpVal ==="" ){
      setOutput(' error please type valid input!')
    } else {
      setOutput(inpVal);
    }
  };

  // Rest of your component remains unchanged

  // Use handleWeightResult in your button's onClick event in your component.

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
              <optgroup label="Length">
                {Options.Weight.map((e, index) => {
                  return (
                    <option key={`from-weight-${index}`} value={e.value}>
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
              <optgroup label="Length">
                {Options.Weight.map((e, index) => {
                  return (
                    <option key={`to-weight-${index}`} value={e.value}>
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
};

export default Weight;
