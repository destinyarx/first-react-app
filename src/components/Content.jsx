import React, { useState } from "react";

const Content = () => {
    // State Hook - `useState`
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    const [showEdit, setShowEdit] = useState(-1);
    const [updatedText, setUpdatedText] = useState("");


    /* Adds a new item to the list array*/
    function addItem() {
    if (!newItem) {
        alert("Press enter an item.");
        return;
    }

    const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
    }

    /* Deletes an item based on the `item.id` key */
    function deleteItem(id) {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    }

    /* Edit an item text after creating it. */
    function editItem(id, newText) {
        // Get the current item
        const currentItem = items.filter((item) => item.id === id);

        // Create a new item with same id
        const newItem = {
            id: currentItem.id,
            value: newText,
        };

        deleteItem(id);

        // Replace item in the item list
        setItems((oldList) => [...oldList, newItem]);
        setUpdatedText("");
        setShowEdit(-1);
    }

    // Add item when entery key is press
    function handleKeyPress(event) {
        if (event.key === "Enter") {
          addItem();
        }
    }

    // Main content UI component
    return (
      <div>
        {/* Add new item (input) */}
        <input
          type="text"
          placeholder="Add an item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyPress={handleKeyPress}
        />
  
        {/* Add (button) */}
        <button id="addBtn" onClick={() => addItem()}> Add </button>
  
        {/* List of todos (unordered list) */}
        <ul>
          {items.map((item) => {
            return (
              <div>
                <li className="text-label" key={item.id} onClick={() => setShowEdit(item.id)}>
                  {item.value}
                  <button className="delete-button" onClick={() => deleteItem(item.id)}>
                    Delete
                  </button>
                </li>
  
                {showEdit === item.id ? (
                  <div>
                    <input
                      type="text"
                      value={updatedText}
                      onChange={(e) => setUpdatedText(e.target.value)}
                    />
                    <button onClick={() => editItem(item.id, updatedText)}>Update</button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </ul>
      </div>
    );
};
  
export default Content;
