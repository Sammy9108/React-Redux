function IndiaClock() {
  let currDate = new Date().toLocaleDateString();
  let currTime = new Date().toLocaleTimeString();
  return (
    <div className="callout">
      <h1 className="csk">Bharat Clock</h1>
      <h4>
        This is the clock that shows the time in Bharat at all times
        <br />
        This is current time: {currDate} - {currTime}
      </h4>
    </div>
  );
}

export default IndiaClock;
