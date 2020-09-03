import React from 'react';
import styles from './list.module.css'
import List from '../Lists/Lists'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import contactsActions from '../../redux/contacts/contactActions';
import contactSelector from '../../redux/contactSelectors';

function ContactList({ filteredArr }) {
	return (
		<TransitionGroup component="ul" className={styles.contactList}>
			{filteredArr.map((item) => {
				return (
					<CSSTransition key={item.id}
					timeout={250}
					classNames={styles}
					unmountOnExit
					>
                    <List 
					id={item.id}
					/>
					</CSSTransition>
					
				);
			})}
		</TransitionGroup>
	);
}

const mapStateToProps = state => ({
	filteredArr: contactSelector.getVisibleContacts(state)
})

const mapDispatchToProps = {
	hclick: contactsActions.removeContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
