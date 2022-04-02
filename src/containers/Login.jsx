const Login = (props) => {
  const [focused, setFocused] = useState(false);
  const handleFocused = () => {
    setFocused(true);
  };
  const {
 label, errorMessage, onChange, id, ...inputProps
} = props;
  return (
    <div className="inputs">
      <div className="main">
        <label>{label}</label>
        <input
          key={id}
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocused}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default Login;
