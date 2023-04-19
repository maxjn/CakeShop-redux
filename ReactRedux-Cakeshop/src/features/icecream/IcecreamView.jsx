import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

function IcecreamView() {
  const dispatch = useDispatch();
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const [value, setValue] = useState(1);
  return (
    <div>
      <p>Number Of Icecreams: {numOfIcecreams}</p>
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

export default IcecreamView;
