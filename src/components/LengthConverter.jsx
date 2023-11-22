import React, { useState } from "react";
import { Options } from "../constant";
const ConverterBody = () => {
  const [inpVal, setInpVal] = useState("");
  const [output, setOutput] = useState("output");
  const HandelOnResult = () => {
    let from = document.getElementById("from");
    let to = document.getElementById("to");
    if (from.value === "kilometer" && to.value === "meter") {
      let kmToM = inpVal * 1000;
      setOutput(kmToM + "m");
    } else if (from.value === "kilometer" && to.value === "centimeter") {
      let KmToCm = inpVal * 100000;
      setOutput(KmToCm + "cm");
    } else if (from.value === "meter" && to.value === "kilometer") {
      let MToKm = inpVal / 1000;
      setOutput(MToKm + "km");
    } else if (from.value === "meter" && to.value === "centimeter") {
      let MtoCm = inpVal / 0.01;
      setOutput(MtoCm + "cm");
    } else if (from.value === "centimeter" && to.value === "meter") {
      let CmToM = inpVal * 0.01;
      setOutput(CmToM + "m");
    } else if (from.value === "meter" && to.value === "inch") {
      let MToInch = inpVal * 39.3701;
      setOutput(MToInch + "inch");
    } else if (from.value === "inch" && to.value === "meter") {
      let InchToMeter = inpVal / 39.3701;
      setOutput(InchToMeter + "inch");
    } else if (from.value === "inch" && to.value === "centimeter") {
      let InchToCen = inpVal * 2.4;
      setOutput(InchToCen + "cm");
    } else if (from.value === "centimeter" && to.value === "inch") {
      let CenToInch = inpVal / 2.4;
      setOutput(CenToInch + "inch");
    } else if (from.value === "centimeter" && to.value === "kilometer") {
      let CmToKm = inpVal / 100000;
      setOutput(CmToKm + "km");
    } else if (from.value === "kilometer" && to.value === "inch") {
      let KmToInch = inpVal * 39370.1;
      setOutput(KmToInch + "inch");
    } else if (from.value === "inch" && to.value === "kilometer") {
      let InchToKm = inpVal / 39370.1;
      setOutput(InchToKm + "km");
    } else if (inpVal === "") {
      setOutput(" error please type valid input!");
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
              <optgroup label="Length">
                {Options.Length.map((e, index) => {
                  return (
                    <option key={`length-A-${index}`} value={e.value}>
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
                {Options.Length.map((e, index) => {
                  return (
                    <option key={`length-B-${index}`} value={e.value}>
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

export default ConverterBody;
