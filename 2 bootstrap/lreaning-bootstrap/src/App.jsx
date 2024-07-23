import "./App.css";
import Swal from "sweetalert2";

function App() {
  const handle = () => {
    Swal.fire({
      position: "top-middle",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <button type="button" class="btn btn-info" onClick={handle}>
      Info
    </button>
  );
}

export default App;
