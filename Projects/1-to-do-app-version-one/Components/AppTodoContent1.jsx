function AppTodoContent1() {
  let TodoName = "Buy Milk";
  let TodoDate = "2/6/2024";
  return (
    <div className="container context-kg">
      <div className="row kg-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodoContent1;
