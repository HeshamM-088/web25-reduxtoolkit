import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "rsuite";
import { getUsers } from "../redux/slices/UserSlice";

const About = () => {
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <h1>About</h1>

      <Button color="red" onClick={() => dispatch(getUsers())}>
        Increment
      </Button>
    </div>
  );
};

export default About;
