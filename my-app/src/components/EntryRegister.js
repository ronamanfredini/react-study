import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const EntryRegister = (props) => {
	let inputGroup = (<div>
		<div className="input-group">
			<label>Nome</label>
			<input type="text" />
		</div>
		<div className="input-group">
			<label>Valor</label>
			<input type="number" />
		</div>
	</div>);

	let showInputGroup = false;
	let toggleInputGroup = () => {console.log('CHEGUEI'); showInputGroup = !showInputGroup};
	return (
		<div>
			<span onClick={toggleInputGroup}>
				<FontAwesomeIcon icon="plus" />
			</span>
			{showInputGroup && inputGroup}
		</div>
	);

};

export default EntryRegister;