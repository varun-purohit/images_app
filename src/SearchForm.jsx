import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="text-indigo-500 capitalize text-4xl text-center">
        unsplash images
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" w-[90vw] max-w-[600px] my-0 mx-auto mt-8 grid grid-cols-[1fr_auto] "
      >
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="border-[1px] dark:border-[1px]  bg-gray-50  border-gray-300 dark:border-white text-gray-900 transition-[color] ease-in-out delay-300 px-[0.75rem] py-[.375rem] "
        />
        <button
          className="bg-indigo-500 text-white capitalize px-[0.75rem] py-[.375rem] tracking-[1px] transition-[color] ease-in-out delay-300 shadow-[0_1px_3px_0_rgba(0, 0, 0, 0.1), 0_1px_2px_0_rgba(0, 0, 0, 0.06)]"
          type="submit"
        >
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
