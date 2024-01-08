const InputUI = (props) => {

	const { type, placeholder, label } = props
	return (
		<>
			<label htmlFor="">{label}</label>
			<input type={type} placeholder={placeholder} />
		</>
	);
};

export default InputUI;
