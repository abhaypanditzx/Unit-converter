import React, { useState } from "react";

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
    } else {
      setOutput(inpVal);
    }
  };

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
            <optgroup label="Length">
              <option value="kilometer">Kilometer</option>
              <option value="meter">Meter</option>
              <option value="inch">Inch</option>
              <option value="centimeter">Centimeter</option>
            </optgroup>
          </select>
          <select
            id="to"
            className="sm:w-[150px]  max-xs:w-[90px]  max-xs:text-sm lg:w-[300px] h-[40px] "
          >
            <optgroup label="Length">
              <option value="kilometer">Kilometer</option>
              <option value="meter">Meter</option>
              <option value="inch">Inch</option>
              <option value="centimeter">Centimeter</option>
            </optgroup>
          </select>
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
};

export default ConverterBody;
