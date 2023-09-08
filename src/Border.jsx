import './styles/Border.css'

const Border = ({ children }) => {
	return (
		<>
			<div className={ 'border' }>
				<p className={ 'border-value' }>{ children }</p>
			</div>
		</>
	);
}

export default Border;