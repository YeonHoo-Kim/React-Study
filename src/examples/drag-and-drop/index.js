import React, { useState, useRef } from 'react';

const style = {
  root: {
    width: '100%',
    height: 'calc(100% - 10px)',
    backgroundColor: '#F1F4F8',
    paddingTop: '10px',
  },
  customListItem: {
    boxSizing: 'border-box',
    backgroundColor: 'white',
    color: '#222222',
    fontSize: '16px',
    fontWeight: '800',
    margin: '0 30% 5px 30%',
    padding: '10px',
    cursor: 'move',
  },
};

const CustomList = ({ list, handleDragStart, handleDragEnter }) => {
  return (
    <div style={style.root}>
      {list &&
        list.map((item, i) => (
          <h1
            style={style.customListItem}
            onDragStart={(e) => handleDragStart(e, i)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => handleDragEnter(e, i)}
            key={i}
            draggable
          >
            {item}
          </h1>
        ))}
    </div>
  );
};

const DragAndDrop = () => {
  const [list, setList] = useState([
    'Chicken Biriyani',
    'Mutton Pulao',
    'Paneer Masala',
    'Tandoori Chicken',
    'Dal Makhana',
    'Malai Kofta',
  ]);

  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, pos) => {
    draggingItem.current = pos;
    console.log(e.target.innerHTML);
  };

  const handleDragEnter = (e, pos) => {
    dragOverItem.current = pos;
    console.log(e.target.innerHTML);

    const listCopy = [...list];
    console.log(draggingItem.current, dragOverItem.current);

    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setList(listCopy);
  };

  return (
    <>
      <CustomList
        list={list}
        handleDragStart={handleDragStart}
        handleDragEnter={handleDragEnter}
      />
    </>
  );
};

export default DragAndDrop;
