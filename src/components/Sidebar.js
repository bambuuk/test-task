import { RiHome6Line } from "react-icons/ri";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { FiLayers, FiSettings } from "react-icons/fi";
import { RiCheckboxMultipleLine } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="w-[276px] h-full fixed left-0 top-0 bg-[#FFFFFF] px-4 py-8">
      <div className="flex flex-col min-h-full">
        <nav className="flex-auto">
          <ul className="text-red-600">
            <li className="flex items-center cursor-pointer rounded-[6px] py-2 px-3 my-0.5 text-lg font-semibold text-[#1B1B1B]">
              <RiHome6Line size={24} className="mr-3 opacity-60" />
              Головна
            </li>
            <li className="flex items-center cursor-pointer rounded-[6px] py-2 px-3 my-0.5 bg-light-blue text-lg font-semibold text-[#1B1B1B]">
              <HiOutlineChartSquareBar size={24} className="mr-3" />
              Сторінка 1
            </li>
            <li className="flex items-center cursor-pointer rounded-[6px] py-2 px-3 my-0.5 text-lg font-semibold text-[#1B1B1B]">
              <FiLayers size={24} className="mr-3 opacity-60" />
              Сторінка 2
            </li>
            <li className="flex items-center cursor-pointer rounded-[6px] py-2 px-3 my-0.5 text-lg font-semibold text-[#1B1B1B]">
              <RiCheckboxMultipleLine size={24} className="mr-3 opacity-60" />
              Сторінка 3
            </li>
          </ul>
        </nav>
        <div>
          <div className="flex items-center cursor-pointer rounded-[6px] py-2 px-3 text-lg font-semibold text-[#1B1B1B] opacity-60">
            <FiSettings size={24} className="mr-3" /> 
            Налаштування
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
