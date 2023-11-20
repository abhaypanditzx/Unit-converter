import React, { useState } from "react";
import LengthConverter from "../components/LengthConverter";
import Switch from "../components/Switch";
function Home() {
  const [converter, setConverter] = useState(<LengthConverter />);
  return (
    <div className=" min-w-full sm:justify-around bg-gray-100 max-xs:items-center max-xs:h-full max-xs:space-y-10 flex max-xs:flex-col-reverse p-4 overflow-hidden sm:h-screen items-center">
      <Switch setConverter={setConverter} />
      {converter}
    </div>
  );
}

export default Home;
