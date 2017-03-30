import React from 'react';
import CONTACTS from '../contacts';
import ContactList from './contacts-list';

export default function ContactListContainer () {
	return (
		<ContactList contacts={CONTACTS} />
	);
}
