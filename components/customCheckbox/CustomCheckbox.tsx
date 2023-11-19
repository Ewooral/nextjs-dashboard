import { useState } from "react";

export function CustomCheckbox() {
    const [checkboxes, setCheckboxes] = useState<boolean[]>(
      new Array(5).fill(false)
    );
  
    const handleCheckboxChange = (index: number) => {
      const updatedCheckboxes = [...checkboxes];
      updatedCheckboxes[index] = !updatedCheckboxes[index];
      setCheckboxes(updatedCheckboxes);
    };
    console.log("Rendering App component", checkboxes);
    return (
      <div className="Custom__App">
        {checkboxes.map((isChecked, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              checked={isChecked}
              onChange={() => handleCheckboxChange(index)}
            />
            <label htmlFor={`checkbox-${index}`}>
              {isChecked ? index + 1 : ""}
            </label>
          </div>
        ))}
      </div>
    );
  }