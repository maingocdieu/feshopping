import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Item = ({
  test,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}: any) => {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
      };

  return (
    <div>
      <div className="flex justify-between bg-gray-400 w-[200px] mt-2">
        <span>{test.name}</span>
        <button
          onClick={toggleSection}
        >
            <FontAwesomeIcon icon={faAngleUp} />
         
        </button>
      </div>
      {isActiveSection  && (
        <div className="ml-3 mt-2">
          {test.child.map((a: any) => {
            return <div>
                {a.name}
                </div>;
          })}
        </div>
      )}
    </div>
  );
};
