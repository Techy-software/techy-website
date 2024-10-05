import "./InputField.css";

export default function InputField({
  label,
  type,
  placeholder,
  value,
  setValue,
  style,
}) {
  return (
    <div className="inputField">
      {label && <label className="formLabel">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        // onChange={setValue}  // Uncomment when onChange is Ready
        required
        style={style}
      />
    </div>
  );
}
