import { useState, useEffect } from "react";

const dataCheckbox = [
    {
        id: 1,
        tag: "HTML",
    },
    {
        id: 2,
        tag: "CSS",
    },
    {
        id: 3,
        tag: "Javascript",
    }

];

const CheckboxChallange = ({ getCheck }) => {

    const [isArray, setIsArray] = useState([]);

    useEffect(() => {
        getCheck(isArray);
    });


    const handleCheck = (e) => {
        if (e.target.checked) {
            setIsArray([...isArray, e.target.value]);
        } else {
            setIsArray(isArray.filter((item) => item !== e.target.value));
        }
    }

    return dataCheckbox.map((item) => {
        return (
          <div 
            key={item.id}
            className="flex items-center mr-4">
            <input
              type="checkbox"
              value={item.tag}
              onChange={handleCheck}
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
            />
            <label
              className="ml-2 text-lg font-normal text-gray-500"
            >
              {item.tag}
            </label>
          </div>
        );
    });
};

export default CheckboxChallange;
