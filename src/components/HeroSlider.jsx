/* eslint-disable @next/next/no-img-element */

const HeroSlider = () => {
  return (
    <div className="bg-[url('/hero.jpg')]  h-[60vh] md:h-[70vh] lg:h-[82vh] flex justify-center items-center">
      <div className="bg-[#f9f2e6d5] px-2 py-4 md:py-10 md:px-12 rounded-md">
        <div className="flex flex-col gap-1">
          <div className="w-60 mx-auto">
            <p
              style={{
                backgroundImage:
                  "repeating-linear-gradient(120deg, #A95F20, #FFF8AA , #A95F20, #FFF8AA)",
              }}
              className="h-1"
            ></p>
            <div className="flex justify-between">
              <p className="bg-[#A95F20] h-8 w-1"></p>
              <p className="bg-[#FFF8AA] h-8 w-1"></p>
            </div>
          </div>
          <div>
            <h1 className="text-6xl font-serif text-center">Gold Jewellery</h1>
          </div>
          <div className="w-60 mx-auto">
            <div className="flex justify-between">
              <p className="bg-[#FFF8AA] h-8 w-1"></p>
              <p className="bg-[#A95F20] h-8 w-1"></p>
            </div>
            <p
              style={{
                backgroundImage:
                  "repeating-linear-gradient(120deg, #FFF8AA , #A95F20, #FFF8AA,#A95F20)",
              }}
              className="h-1"
            ></p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <div>
            <h1 className="text-5xl font-serif -mt-3">
              <span className="text-7xl">10</span>K+
            </h1>
          </div>
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(#A95F20, #FFF8AA , #A95F20, #FFF8AA )",
            }}
            className="w-[2px] bg-gray-500"
          ></div>
          <div>
            <p>LOREM IPSUM</p>
            <p>SIMPLY DUMMY</p>
            <p>LOREM</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-96 mt-4">
          <p
            style={{
              backgroundImage:
                "repeating-linear-gradient(120deg, #FFF8AA , #A95F20, #FFF8AA,#A95F20)",
            }}
            className="h-[2px]"
          ></p>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p
            style={{
              backgroundImage:
                "repeating-linear-gradient(120deg, #FFF8AA , #A95F20, #FFF8AA,#A95F20)",
            }}
            className="h-[2px]"
          ></p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
