import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/provacy";

const ButtonControl = () => {
  const dispatch = useDispatch();
  const inputVal = useRef();

  const handleInc = () => {
    dispatch(counterActions.increment());
  };

  const handleDec = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputVal.current.value));
    inputVal.current.value = "";
  };

  const handleSub = () => {
    dispatch(counterActions.substract(inputVal.current.value));
    inputVal.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={handleInc}>
          +1
        </button>

        <button type="button" className="btn btn-success" onClick={handleDec}>
          -1
        </button>

        <button type="button" className="btn btn-info" onClick={handlePrivacy}>
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center counter-row">
        <input
          type="text"
          placeholder="Enter text"
          className="conter-text"
          ref={inputVal}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSub}>
          Substract
        </button>
      </div>
    </>
  );
};

export default ButtonControl;
