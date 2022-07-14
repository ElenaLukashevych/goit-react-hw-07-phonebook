import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

import { useDeleteContactsMutation } from 'redux/contactsOperation';

function ContactItem({ name, number, id }) {
    const [deleteContact, { isLoading }] = useDeleteContactsMutation();

    return (
        <li className={s.item}><p>{name}: {number}</p>
        <button disabled={isLoading} className={s.button} onClick={() => deleteContact(id)} type="button">{isLoading ? 'Deleting...' : 'Delete'}</button></li>
    )
    
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ContactItem;