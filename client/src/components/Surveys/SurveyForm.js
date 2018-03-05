import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

export class SurveyForm extends Component
{
	renderFields()
	{
		return _.map(formFields, ({ label, name }) =>
		{
			return (
				<Field
					key={name}
					component={SurveyField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render()
	{
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text left">
						Cancel
					</Link>
					<button type="submit" className="teal btn-flat white-text right">
						Nextfd
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values)
{
	const errors = {};

	errors.emails = validateEmails(values.emails || '');

	_.each(formFields, ({ name }) => {
		if (!values[name]) errors[name] = 'Required';
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);