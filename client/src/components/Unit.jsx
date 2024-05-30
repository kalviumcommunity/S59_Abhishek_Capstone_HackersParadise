import React from "react";

export default function Unit() {
  return (
    <>
      <div className="bg-[#000746] h-full">
      <div className="text-white p-4">
            <ol className="list-inside list-decimal text-[4vw]">
              <li>
                <span class="font-bold">NETWORKING</span>
                <div class="text-[1vw] ml-[3vw] p-4">
                  <p className="w-[80%]">
                    Networking is the process of making connections and building
                    relationships. These connections can provide you with advice
                    and contacts, which can help you make informed career
                    decisions.
                  </p>
                  <ol type="i" class="list-inside list-decimal mt-2">
                    <li>Router</li>
                    <li>MAC Address</li>
                    <li>IP Address</li>
                  </ol>
                </div>
              </li>
            </ol>
          </div>
      </div>
    </>
  );
}
