import React from 'react';

const FinancialEntry = (props) => {
	const financialProps = props.financialProps;
	return (
		<div className="financial-entry">
			<span>{financialProps.description}</span>
		</div>
	);
};

export default FinancialEntry;
