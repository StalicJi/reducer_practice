import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretLeft } from 'react-icons/ai';

//手風琴效果
const Accordion = ({ itemss }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    // if (expandedIndex === nextIndex) {
    //   setExpandedIndex(-1)
    // } else {
    //   setExpandedIndex(nextIndex);
    // }
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1
      } else {
        return nextIndex;
      }
    })
  };
  const renderedItems = itemss.map((item, index) => {
    const isExpanded = index === expandedIndex;
    // console.log(isExpanded);
    const icon = <span className='text-2xl'>
      {isExpanded ? <AiFillCaretDown/> : <AiFillCaretLeft/>}
    </span>

    return (
     <div key={item.id}>
        <div className='flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between' onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
     </div>
    )
  });

  return (
    <div className='border-x border-t rounded'>
      {renderedItems}
    </div>
  )
}

export default Accordion
