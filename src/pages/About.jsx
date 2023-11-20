import React from "react";
function About() {
  return (
    <div className="min-h-full flex max-xs:flex-col sm:flex-row bg-gray-100 min-w-full max-xs:p-5 p-16 ">
      <div className="lg:w-[70%] h-full space-y-12 max-xs:w-full">
        {/* ABOUT US SECTION */}

        <div className="max-xs:w-[100%] sm:w-[90%]">
          <h1 className="text-2xl capitalize text-red-600 font-rubik">
            about us
          </h1>
          <p className="text-black/90 text-sm ">
            Greetings! I'm Abhay , the creator and developer behind Unit
            Converter, your online destination for hassle-free unit conversions.
            your go-to destination for seamless unit conversions! At Unit
            Converter, we understand that simplicity and accuracy are key when
            it comes to unit conversions.
          </p>
        </div>
        {/* MY MISSION SECTION */}
        <div className="max-xs:w-[100%] sm:w-[80%]">
          <h1 className="text-2xl capitalize text-red-600 font-rubik">
            My Mission
          </h1>
          <p className="text-black/90 text-sm ">
            At Unit Converter, my mission is to provide you with a
            straightforward and efficient tool for converting units. I
            understand the importance of simplicity and accuracy, whether you're
            a student tackling assignments, a professional needing quick
            conversions, or anyone in between.
          </p>
        </div>
        {/* WHY SECTION  */}
        <div className=" sm:space-y-2 sm:w-[90%] rounded-sm overflow-hidden bg-white">
          <h1 className="text-gray-100 p-2  text-2xl light-red-gradient">
            Why Unit Converter ?
          </h1>
          <div className="sm:space-y-10">
            <section className="p-2  w-full ">
              <b className="w-max">Designed for Simplicity:</b>
              <p className="sm:text-sm max-xs:text-xs">
                I've crafted a clean and intuitive design to ensure a seamless
                user experience. Converting units shouldn't be complicated, and
                Unit Converter reflects that philosophy.
              </p>
            </section>
            <section className="p-2  w-full ">
              <b className="w-max">Accurate and Reliable Conversions:</b>
              <p className="sm:text-sm max-xs:text-xs">
                Highlight the accuracy of your conversion algorithms. Users need
                to trust that your tool will provide precise and reliable
                results.
              </p>
            </section>
            <section className="p-2  w-full ">
              <b className="w-max">Mobile Responsiveness:</b>
              <p className="sm:text-sm max-xs:text-xs">
                If your unit conversion tool is accessible and functional across
                various devices, especially on mobile devices, make sure to
                mention it.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
