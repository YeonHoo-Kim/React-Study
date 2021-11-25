// import React, { useState, useCallback } from 'react';

// const Item = React.memo(({ id, value, onChange }) => {
//   return (
//     <>
//       {console.log(`Item${id} component rendered`)}
//       <h3>Item{id}</h3>
//       <input onChange={(e) => onChange(id, e.target.value)} value={value} />
//     </>
//   );
// });

// const Components = () => {
//   const [items, setItems] = useState([
//     { value: '' },
//     { value: '' },
//     { value: '' },
//   ]);

//   //   const onChange = useCallback((id, value) => {
//   //     setItems((prevItems) =>
//   //       prevItems.map((item, index) => {
//   //         return index !== id ? item : { value: value };
//   //       }),
//   //     );
//   //   }, []);

//   return (
//     <div>
//       <h2>{JSON.stringify(items)}</h2>
//       <div>
//         {items.map((item, index) => (
//           <Item
//             key={index}
//             id={index}
//             value={item.value}
//             // onChange={(id, value) => {
//             //     setItems((prevItems) =>
//             //       prevItems.map((item, index) => {
//             //         return index !== id ? item : { value: value };
//             //       }),
//             //     );
//             //   }
//             // }
//             onChange={useCallback((id, value) => {
//               setItems((prevItems) =>
//                 prevItems.map((item, index) => {
//                   return index !== id ? item : { value: value };
//                 }),
//               );
//             }, [])}
//             // onChange={onChange}
//           />
//         ))}
//       </div>
//       <button onClick={useCallback((e)=>{console.log(e.target)})}></button>
//     </div>
//   );
// };

// export default Components;

import React from 'react';

const Components = () => {
  return (
    <>
      <h1>Components!</h1>
    </>
  );
};

export default Components;
