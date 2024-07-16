import { useSelector } from "react-redux";

const DisplayComp = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return (
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Current Value of counter is: {counterVal}</p>
    </div>
  );
};

export default DisplayComp;
