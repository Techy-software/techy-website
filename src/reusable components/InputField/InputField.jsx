import "./InputField.css";

export default function InputField(props) {
  return (
    <div className="inputField">
      <label className="formLabel">{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        // onChange={props.setValue}  // Uncomment when onChange is Ready
        required
      />
    </div>
  );
}
