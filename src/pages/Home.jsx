import React from "react";
import { decrement, increment } from "../redux/slices/CounterSlice";
import { useDispatch } from "react-redux";
import { Button } from "rsuite";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>

      <Button
        color="blue"
        appearance="subtle"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button
        color="red"
        appearance="subtle"
        onClick={() => dispatch(decrement({ num: 5, name: "hesham" }))}
      >
        Decrement
      </Button>
    </div>
  );
};

export default Home;
