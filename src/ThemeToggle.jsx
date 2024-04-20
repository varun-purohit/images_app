import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="flex justify-end py-4 mx-auto my-0 w-[90vw] max-w-[1120px]">
      <button
        onClick={toggleDarkTheme}
        className="w-20 h-8 grid place-items-center "
      >
        {isDarkTheme ? (
          <BsFillMoonFill className="text-2xl text-white" />
        ) : (
          <BsFillSunFill className="text-2xl text-gray-900" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
