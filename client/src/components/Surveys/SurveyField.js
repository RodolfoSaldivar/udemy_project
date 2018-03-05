import React from 'react';

const SurveyField = ({ input, label, meta: {error, touched} }) =>
(
	<div>
		<br />
		<label>
			{ label }
			<label style={{color:"red", marginLeft:"5px"}}>
				{touched && error}
			</label>
		</label>
		<input {...input} />
	</div>
);

export default SurveyField;