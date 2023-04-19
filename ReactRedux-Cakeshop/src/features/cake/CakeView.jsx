import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <p>Number Of Cakes:{numOfCakes} </p>
      <button onClick={() => dispatch(restocked(value))}>ReStocked</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(ordered())}>Ordered</button>
    </div>
  );
}

export default CakeView;
