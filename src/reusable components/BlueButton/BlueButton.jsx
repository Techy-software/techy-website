// Not Implemented Yet

const BlueButton = ({
  text = "Save Changes",
  buttonStyle = "",
  textStyle = "text-white",
  onClick = () => {},
}) => {
  return (
    <>
      <button
        type="button"
        className={`border-2 bg-blue-600 p-3 rounded-lg w-32 ${buttonStyle}`}
        onClick={onClick}
      >
        <span className={textStyle}>{text}</span>
      </button>
    </>
  );
};

export default BlueButton;
