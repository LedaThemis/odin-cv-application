const displayElement = (htmlID, htmlName, htmlType, htmlStateKey, htmlValue, htmlOnChange, editable) => {
  if (editable) {
    return (
      <input
        id={htmlID}
        name={htmlName}
        type={htmlType}
        data-statekey={htmlStateKey}
        value={htmlValue}
        onChange={htmlOnChange}
      ></input>
    );
  } else {
    return <p className="value-display">{htmlValue}</p>;
  }
};

export default displayElement;
