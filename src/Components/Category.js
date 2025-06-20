import React from "react";
import Nominee from "./Nominees";

const Category = ({ category, setSelectedNominee, selectedNominee }) => {
  return (
    <div className="category">
      <ul>
        <div key={category.id} className="category-title">
          <h1>{category.title}</h1>
        </div>
        <div className="nominees">
          {category.items.map((nominee) => (
            <Nominee
              key={nominee.id}
              nominee={nominee}
              setSelectedNominee={setSelectedNominee}
              categoryId={`${category.title}`}
              selectedNominee={selectedNominee}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Category;
