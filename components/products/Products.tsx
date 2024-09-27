import { dataset } from "./data";


const Products = () => {
  return (
    <div className=" px-8 py-6 lg:px-20 max-w-screen-2xl mx-auto">
      <div className=" flex py-10 items-center justify-center lg:justify-between">
        <p className=" text-4xl font-thin">OUR CREATIONS</p>
        <button className="hidden lg:block border-2 border-black py-2 px-4 hover:bg-black hover:text-white duration-300 ease-out">
          SEE ALL
        </button>
      </div>

      <div className="grid lg:hidden gap-6">
        {dataset.map((item, index) => (
          <div
            key={index}
            className=" relative w-full bg-cover h-[10rem] hover:scale-[102%] duration-300"
            style={{ backgroundImage: `url(${item.imgmobile})` }}
          >
            <div className="absolute left-0 bottom-0 top-0 bg-gradient-to-r from-black opacity-65 w-2/5"></div>
            <p className="text-white absolute bottom-6 left-6 max-w-56 font-thin text-4xl">
              {item.txt}
            </p>
          </div>
        ))}
      </div>

      <div className="hidden  lg:grid lg:grid-cols-4 gap-6">
        {dataset.map((item, index) => (
          <div
            key={index}
            className=" relative w-full bg-cover h-[30rem] hover:scale-[102%] duration-500 ease-out"
            style={{ backgroundImage: `url(${item.imgdesktop})` }}
          >
            <div className="absolute left-0 bottom-0 top-0 bg-gradient-to-r from-black opacity-65 w-2/5"></div>
            <p className="text-white absolute bottom-6 left-6 max-w-44 font-thin text-4xl">
              {item.txt}
            </p>
          </div>
        ))}
      </div>

      <div className="lg:hidden w-full py-6 flex items-center justify-center">
        <button className=" border-2 border-black py-2 px-14 text-xl font-mono font-semibold hover:bg-black duration-300 ease-out hover:text-white">
          SEE ALL
        </button>
      </div>
    </div>
  );
}

export default Products