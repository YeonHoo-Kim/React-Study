import React, { useState, useCallback, useEffect } from 'react';

// function NumberList1({ count }) {
//   let list = [];
//   for (let i = 0; i < count; i++) {
//     list.push(<Number getNumber={() => 2 * i} key={i} />);
//   }
//   return list;
// }

// function NumberList2({ count }) {
//   let list = [];
//   const getNumber = (i) => {
//     return 2 * i;
//   };
//   for (let i = 0; i < count; i++) {
//     list.push(<Number number={getNumber(i)} key={i} />);
//   }
//   return list;
// }

// function Number({ number, getNumber }) {
//   return (
//     <h1 style={{ color: number != null ? 'red' : 'blue' }}>
//       {number != null ? number : getNumber()}
//     </h1>
//   );
// }

// const Functions = () => {
//   return (
//     <>
//       <NumberList1 count={1000} />
//       <NumberList2 count={1000} />
//     </>
//   );
// };

// const Functions = () => {
//   //   const onClick = (e) => {
//   //     console.log(`I'm Clicked!!!`, e.target);
//   //   };
//   return (
//     <>
//       <button
//         onClick={(e) => {
//           console.log(`I'm Clicked!!!`, e.target);
//         }}
//       >
//         Click me!!!
//       </button>
//     </>
//   );
// };

// const List = ({ getItems }) => {
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//       setItems(getItems(5));
//       console.log('Updating Items');
//     }, [getItems]);

//     return items.map((item) => <div key={item}>{item}</div>);
//   };

//   const Functions = () => {
//     const [number, setNumber] = useState(1);
//     const [dark, setDark] = useState(false);

//     const getItems = useCallback(
//       (increment) => {
//         return [
//           increment + number,
//           increment + number + 1,
//           increment + number + 2,
//         ];
//       },
//       [number],
//     );

//     const theme = {
//       backgroundColor: dark ? '#333' : '#FFF',
//       color: dark ? '#FFF' : '#333',
//     };

//     return (
//       <div style={theme}>
//         <input
//           type="number"
//           value={number}
//           onChange={(e) => setNumber(parseInt(e.target.value))}
//         />
//         <button onClick={() => setDark((prevDark) => !prevDark)}>
//           Toggle theme
//         </button>
//         <List getItems={getItems} />
//       </div>
//     );
//   };

function Functions() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    debugger;
    setCount((prevCount) => prevCount + 1);
  };

  debugger;
  console.log('code read');

  return (
    <div>
      {console.log('rendered')}
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button
        onClick={() => {
          debugger;
          setCount((prevCount) => prevCount - 1);
        }}
      >
        -
      </button>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default Functions;
