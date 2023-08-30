
function ButtonPoke({ prevPage, nextPage, currentPage }) {
 
  return (
    <div className="flex flex-wrap justify-center my-4 gap-4">
 
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={prevPage}
        disabled={prevPage === null}
      >
        {"<"}
      </button>
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {currentPage}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={nextPage}
        disabled={nextPage === null}
      >
        {">"}
      </button>
    </div>
  );
}

export default ButtonPoke;
