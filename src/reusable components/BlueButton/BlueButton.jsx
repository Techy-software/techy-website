// Not Implemented Yet

const BlueButton = ({
  text = "Save Changes",
  buttonStyle = "",
  textStyle = "text-white",
}) => {
  return (
    <>
      <button
        type="button"
        className={`border-2 bg-blue-600 p-3 rounded-lg w-32 ${buttonStyle}`}
      >
        <span className={textStyle}>{text}</span>
      </button>
    </>
  );
};

export default BlueButton;
