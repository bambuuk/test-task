import Sidebar from "./Sidebar";
import truck from "../asserts/Truck.png";

function Page1() {
  return (
    <div className="">
      <Sidebar />
      <div className="max-w-[calc(100%-276px)] w-full bg-[#F6F7FA] absolute right-0 top-0">
        <main className="">
          <h2 className="mt-11 text-center text-5xl font-normal leading-5 tracking-[-.96px] text-[#1B1B1B]">
            Start
          </h2>
          <div className="w-full h-px bg-[#EAECF0] mt-[27px]"></div>
          <div className="max-w-[1036px] mx-auto pb-[37px] px-16">

            <div className="mt-8 py-12 bg-transparent shadow-special rounded-xl">
              <div className="flex">
                <div className="flex flex-col text-center gap-4 w-[72px]">
                  <div className="w-[72px] h-[72px] bg-[#1FC0AE] rounded-full drop-shadow-state1 shadow-state"></div>
                  <div className="text-[14px] font-normal leading-5 text-[#1B1B1B]">
                    Стан 1
                  </div>
                </div>

                <div className="mt-[36px] h-0 w-[131px] ml-[13px] border-dashed border-[#009FE3] border-[1.4px]"></div>

                <div className="flex flex-col text-center gap-4 w-[72px]">
                  <div className="w-[72px] h-[72px] bg-[#1FC0AE] border-[#8E99AB] border-[1px] rounded-full drop-shadow-state1 shadow-state"></div>
                  <div className="text-[14px] font-normal leading-5 text-[#1B1B1B]">
                    Стан 2
                  </div>
                </div>

                <div className="mt-[36px] h-0 w-[131px] ml-[13px] border-dashed border-[#009FE3] border-[1.4px]"></div>

                <div className="flex flex-col text-center gap-4 w-[72px]">
                  <div className="w-[72px] h-[72px] bg-[#EAECF0] rounded-full drop-shadow-state2"></div>
                  <div className="text-[14px] font-normal leading-5 text-[#8E99AB]">
                    Стан 3
                  </div>
                </div>

                <div className="mt-[36px] h-0 w-[131px] ml-[13px] border-dashed border-[#EAECF0] border-[1.4px]"></div>

                <div className="flex flex-col text-center gap-4 w-[72px]">
                  <div className="w-[72px] h-[72px] bg-[#EAECF0] rounded-full drop-shadow-state2"></div>
                  <div className="text-[14px] font-normal leading-5 text-[#8E99AB]">
                    Стан 4
                  </div>
                </div>

                <div className="mt-[36px] h-0 w-[131px] ml-[13px] border-dashed border-transparent border-[1.4px]"></div>

                <div className="flex flex-col text-center gap-4 w-[72px]">
                  <div className="w-[72px] h-[72px] bg-[#EAECF0] rounded-full drop-shadow-state2"></div>
                  <div className="text-[14px] font-normal leading-5 text-[#8E99AB]">
                    Стан 5
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5 justify-between mt-[22px]">
              <div className="w-full bg-[#fff] shadow-information pt-5 pr-[22px] pb-2 pl-[17px] rounded-xl">
                <div className="text-[#1B1B1B] text-xl font-medium">
                  Information
                </div>
                <div className="flex justify-between mt-[23px]">
                  <div className="text-[#1B1B1B] text-base font-medium">
                    Info Number:
                  </div>
                  <div className="text-[#8E99AB] text-base font-medium">
                    903049
                  </div>
                </div>

                <div className="flex justify-between mt-3">
                  <div className="text-[#1B1B1B] text-base font-medium">
                    Pick up Place:
                  </div>
                  <div className="text-[#8E99AB] text-base font-medium">
                    Sweden
                  </div>
                </div>
              </div>

              <div className="w-full bg-[#fff] shadow-information rounded-xl flex justify-around items-center">
                <div className="flex flex-col text-[#1FC0AE] items-center">
                  <div className="text-2xl font-extrabold">We are here</div>
                  <div className="text-sm font-normal leading-6 mt-[6px]">
                    Long time to go
                  </div>
                </div>

                <div>
                  <img
                    src={truck}
                    className="w-full h-full object-cover"
                    alt="Truck"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#fff] rounded-xl px-5 pb-3 pt-[17px] mt-[14px] shadow-reorderBaggage">
              <div className="text-[#1B1B1B] text-xl font-medium">
                Перезамовте Багаж
              </div>

              <div className="mt-5">
                <form className="flex flex-col relative">
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="text-[#8E99AB] text-xs font-normal leading-6"
                    >
                      Дропдаун
                    </label>
                    <select
                      type="text"
                      placeholder="Select option"
                      className="w-full px-3 py-2 rounded-lg border-[1px] border-[#EAECF0] border-solid bg-[#F9FAFB] outline-none text-[#8E99AB] cursor-pointer"
                    >
                      <option>Select option</option>
                    </select>
                  </div>

                  <div className="flex flex-col mt-[17px]">
                    <label
                      htmlFor=""
                      className="text-[#8E99AB] text-xs font-normal leading-6"
                    >
                      Дропдаун
                    </label>
                    <select
                      type="text"
                      placeholder="Select option"
                      className="w-full px-3 py-2 rounded-lg border-[1px] border-[#EAECF0] border-solid bg-[#F9FAFB] outline-none text-[#8E99AB] cursor-pointer"
                    >
                      <option>Select option</option>
                    </select>
                  </div>

                  <div className="flex justify-end">
                    <button className="w-[88px] mt-[52px] py-[10px] px-4 rounded-lg bg-[#1FC0AE] text-[#fff] text-sm leading-5">
                      Done
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page1;
