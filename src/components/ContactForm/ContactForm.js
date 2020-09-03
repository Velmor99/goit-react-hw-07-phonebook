import React, { Component } from 'react';
import styled from './styleContactForm.module.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
// import contactActions from '../../redux/contacts/contactActions';
import contactsOperations from '../../redux/middleware/contactsOperations';

class ContactForm extends Component {
	state = {
		name: '',
		number: ''
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	preventSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<CSSTransition in={true} appear={true} classNames={styled} timeout={700} unmountOnExit>
				<form className={styled.form} onSubmit={this.preventSubmit}>
					<label className={styled.label}>
						Name
						<br />
						<input className={styled.inputName} name="name" type="text" onChange={this.handleChange} />
					</label>
					<label className={styled.label}>
						Number
						<br />
						<input className={styled.inputNumber} name="number" type="text" onChange={this.handleChange} />
					</label>
					<button
						className={styled.submit}
						name="name"
						onClick={() => this.props.clickEvent(this.state.name, this.state.number)}
						type="submit"
					>
						Add to contacts
					</button>
				</form>
			</CSSTransition>
		);
	}
}

const mapDispatchToProps = {
	clickEvent: contactsOperations.addContact
};

export default connect(null, mapDispatchToProps)(ContactForm);
