import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import styles from './styles/title.module.css';
import filtercss from './components/Lists/filter.module.css';
import Notification from './components/notification/notification';
import notify from './styles/notify.module.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsOperations from './redux/middleware/contactsOperations';
import contactSelector from './redux/contactSelectors';

class App extends Component {
	componentDidMount() {
		this.props.onGetContacts();
	}

	render() {
		const isLoading = this.props.isLoadingContacts;
		return (
			<>
				<CSSTransition in={this.props.emptyField === true} timeout={250} classNames={notify} unmountOnExit>
					<Notification text={'One of the fields is not filled'} />
				</CSSTransition>
				<div>
					{isLoading === true && <h1>Loading...</h1>}
					<CSSTransition in={true} classNames={styles} timeout={700} appear={true} unmountOnExit>
						<h2 className={styles.title}>Phonebook</h2>
					</CSSTransition>
					<ContactForm />
					<CSSTransition in={true} appear={true} classNames={filtercss} timeout={250} unmountOnExit>
						<Filter />
					</CSSTransition>
					<ContactList />
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoadingContacts: contactSelector.getLoading(state),
	emptyField: contactSelector.getShowNotify(state)
});

const mapDispatchToProps = {
	onGetContacts: contactsOperations.getContact
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
