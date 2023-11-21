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

  const handleWeightResult = () => {
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
    } else {
      setOutput(inpVal);
    }
  };

  // Rest of your component remains unchanged

  // Use handleWeightResult in your button's onClick event in your component.

  return (
<div className="min-w-[200px] lg:w-[800px] sm:w-[400px] max-[360px]:h-[400px] max-xs:w-[380px] h-[400px] max-[360px]:w-[340px] bg-white shadow-lg shadow-black/20">
      <div className="h-[50px]  heading light-red-gradient flex text-white justify-around items-center  capitalize w-full">
        <div>from :</div>
        <div>to :</div>
      </div>
      <div className="flex flex-col  items-center h-full  w-full justify-around max-xs:justify-center max-xs:space-y-[50px] p-10 max-[360px]:p-4">
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
          <div
            id="output"
            className="output lg:w-[300px]  flex justify-center items-center bg-gray-200 min-h-[40px] shadow-sm shadow-black/20 w-[100px]"
          >
            {output}
          </div>
        </div>

        <div className="w-full flex  max-xs:justify-start  max-xs:space-x-10 justify-around min-h-[40px]">
          <select
            id="from"
            className="sm:w-[150px]  max-xs:w-[90px]  max-xs:text-sm lg:w-[300px] h-[40px] "
          >
            <optgroup label="Weight">
              {Options.Weight.map((e) => {
                return (
                  <option value={e.value} key={`from-weight-${e.value}`}>
                    {e.title}
                  </option>
                );
              })}

              {/* Add other weight units as needed */}
            </optgroup>
          </select>
          <select
            id="to"
            className="sm:w-[150px]  max-xs:w-[90px]  max-xs:text-sm lg:w-[300px] h-[40px] "
          >
            <optgroup label="Weight">
              {Options.Weight.map((e) => {
                return (
                  <option value={e.value} key={`to-weight-${e.value}`}>
                    {e.title}
                  </option>
                );
              })}

              {/* Add other weight units as needed */}
            </optgroup>
          </select>
        </div>
        <button
          onClick={handleWeightResult}
          className="light-red-gradient  max-xs:w-[140px]  max-xs:h-[40px] px-4 py-1 text-white  hover:scale-95 rounded-md"
        >
          Convert
        </button>
      </div>
    </div>
  );
};

export default Weight;
