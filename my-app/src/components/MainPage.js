import React from 'react';
import EntryRegister from './EntryRegister';
import FinancialEntry from './FinancialEntry';
const MainPage = () => {
	const financialProps = { description: 'my-descroption' };
	const propsRegister = () => {

	};
	let propsArr = [];

	for (let i = 0; i < 20; i++) {
		let tempObject = {};
		Object.assign(tempObject, financialProps);
		propsArr.push(tempObject);
	}

	let renderedElements = propsArr.map((el) => <FinancialEntry financialProps={el} />);
	return (
		<div>
			<EntryRegister />
			<div className="financial-entries">
				{renderedElements}
			</div>
		</div>
	);
};

export default MainPage;
