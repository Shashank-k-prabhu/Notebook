import Alert from "react-bootstrap/Alert";
function Alerts(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div
      style={{
        height: "2%",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {props.alert && (
        <Alert variant={props.alert.type} alert-dismissible fade show>
          <strong>{capitalize(props.alert.msg)}</strong>
        </Alert>
      )}
    </div>
  );
}

export default Alerts;
