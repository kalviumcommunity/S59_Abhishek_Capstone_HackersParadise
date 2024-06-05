import React, { useEffect, useState } from "react";

export default function Unit() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/unit")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="bg-[#000746] h-full">
        <div className="text-white p-8 bg-[#1a1a1a] rounded-lg shadow-lg max-w-4xl">
          {data ? (
            <ol className="list-inside list-decimal text-2xl leading-loose">
              <li>
                <span className="font-bold">NETWORKING</span>
                <div className="text-lg ml-8 mt-4">
                  <p className="w-full">
                    Networking is the process of making connections and building
                    relationships. These connections can provide you with advice
                    and contacts, which can help you make informed career
                    decisions.
                  </p>
                  <ol type="i" className="list-inside list-decimal mt-4 ml-8">
                    {data.items.map((item, index) => (
                      <li key={index} className="mt-2">{item}</li>
                    ))}
                  </ol>
                </div>
              </li>
            </ol>
          ) : (
            <p className="text-center text-xl">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
