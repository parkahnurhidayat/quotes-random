import { useEffect, useState } from "react";

const Quotes = () => {
  const [quoteRandom, setQuoteRandom] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getQuote = async () => {
    setIsLoading(true);
    const res = await fetch("https://api.quotable.io/random");
    const quote = await res.json();
    setIsLoading(false);
    setQuoteRandom(quote);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="">
      <div className="max-w-xs md:max-w-5xl mx-auto mt-[15rem] p-10 shadow-2xl shadow-black rounded-md ">
        {isLoading ? (
          <p className="text-center text-white text-2xl">Loading...</p>
        ) : (
          <>
            <p className="mx-auto text-center font-semibold text-3xl text-white ">
              {quoteRandom.content}
            </p>
            <p className="italic text-center pt-2 text-white">
              {quoteRandom.author}
            </p>
          </>
        )}
        <button
          className=" block mx-auto mt-10 bg-black text-white py-2 px-6 rounded-xl hover:shadow-lg shadow-inner hover:bg-slate-600 "
          onClick={() => getQuote()}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
