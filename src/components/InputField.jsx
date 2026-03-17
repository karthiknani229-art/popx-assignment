function InputField({ label, type="text", name, value, onChange }) {

  return (
    <div className="input-group">

      <label className="input-label">{label}</label>

      <input
        className="input-field"
        type={type}
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
      />

    </div>
  )

}

export default InputField