import React, { useEffect, useState } from "react";
import axios from "axios";

const CategorySidebar = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("/api/categories").then((res) => {
      setCategories(res.data);
      setSelected(res.data[0]?.id || null);
    });
  }, []);

  const handleSelect = (id) => {
    setSelected(id);
    onSelectCategory(id);
  };

  return (
    <div className="w-64 p-4 border-r bg-white">
      <h2 className="font-semibold text-lg mb-4">Categories</h2>
      <input
        type="text"
        placeholder="Search"
        className="w-full mb-4 p-2 border rounded"
      />
      <ul>
        {categories.map((cat) => (
          <li
            key={cat.id}
            className={`cursor-pointer px-3 py-2 rounded mb-1 ${
              selected === cat.id ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
            }`}
            onClick={() => handleSelect(cat.id)}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
