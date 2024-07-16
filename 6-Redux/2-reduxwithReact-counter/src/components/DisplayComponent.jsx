import { useSelector } from "react-redux";

const DisplayComp = () => {
  const counter = useSelector((store) => store.counter);

  return (
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Current Value of counter is: {counter}</p>
    </div>
  );
};

export default DisplayComp;
