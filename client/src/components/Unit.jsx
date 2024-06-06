import React, { useEffect, useState } from "react";

export default function Unit() {
  const [data, setData] = useState(null);
  const [newItem, setNewItem] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingItem, setEditingItem] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/unit")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const addItem = () => {
    fetch("http://localhost:8080/unit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: newItem }),
    })
      .then(response => response.json())
      .then(updatedData => setData(updatedData))
      .catch(error => console.error("Error adding item:", error));
  };

  const deleteItem = (index) => {
    fetch(`http://localhost:8080/unit/${index}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(updatedData => setData(updatedData))
      .catch(error => console.error("Error deleting item:", error));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingItem(data.items[index]);
  };

  const updateItem = () => {
    fetch(`http://localhost:8080/unit/${editingIndex}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: editingItem }),
    })
      .then(response => response.json())
      .then(updatedData => {
        setData(updatedData);
        setEditingIndex(null);
        setEditingItem("");
      })
      .catch(error => console.error("Error updating item:", error));
  };

  return (
    <>
      <div className="bg-[#000746] h-full">
        <div className="text-white p-8 bg-[#1a1a1a] rounded-lg shadow-lg max-w-4xl">
          {data ? (
            <>
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
                        <li key={index} className="mt-2">
                          {editingIndex === index ? (
                            <input
                              type="text"
                              value={editingItem}
                              onChange={(e) => setEditingItem(e.target.value)}
                              className="text-black"
                            />
                          ) : (
                            item
                          )}
                          <button onClick={() => deleteItem(index)} className="ml-4 text-red-500">
                            Delete
                          </button>
                          {editingIndex === index ? (
                            <button onClick={updateItem} className="ml-4 text-green-500">
                              Save
                            </button>
                          ) : (
                            <button onClick={() => startEditing(index)} className="ml-4 text-blue-500">
                              Edit
                            </button>
                          )}
                        </li>
                      ))}
                    </ol>
                    <div className="mt-4">
                      <input
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        className="text-black"
                      />
                      <button onClick={addItem} className="ml-2 text-blue-500">
                        Add Item
                      </button>
                    </div>
                  </div>
                </li>
              </ol>
            </>
          ) : (
            <p className="text-center text-xl">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
