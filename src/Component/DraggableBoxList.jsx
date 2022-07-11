import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';
const DraggableBoxList = SortableContainer((props) => {
  return (
    <div style={{ height: '100%' }}>
      {props.colors.map((el, index) => {
        return (
          <DraggableColorBox
            isOpen={props.isOpen}
            key={el.name}
            background={el.color}
            name={el.name}
            onDelete={() => {
              props.handelDeleteColor(el.name);
            }}
            index={index}
          ></DraggableColorBox>
        );
      })}
    </div>
  );
});

export default DraggableBoxList;
