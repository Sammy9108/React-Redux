const ErrorMessage = ({ item }) => {
  return <>{item.length === 0 && <h3>We are hungry.</h3>}</>;
};

export default ErrorMessage;
