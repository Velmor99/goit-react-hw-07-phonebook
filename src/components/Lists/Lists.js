import React from 'react';
import styles from '../ContactList/list.module.css';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/middleware/contactsOperations';
import contactSelector from '../../redux/contactSelectors';

const List = ({ id, name, number, click }) => {
	return (
		<li key={id} className={styles.list}>
			{name}: {number}
			<button className={styles.delete} onClick={click} />
		</li>
	);
};

const mapStateToProps = (state, ownProps) => {
	const item = contactSelector.getItemById(state, ownProps.id)
	return {
		...item
	};
};
const mapDispatchToProps = (dispatch, ownProps) => ({
	click: () => dispatch(contactsOperations.removeContact(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
