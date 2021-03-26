import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux'
import phonebookActions from '../../redux/phonebook/phonebook-actions'

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>
            {name}: {number}
          </p>
          <span className={s.span}></span>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps= state => ({
  contacts: state.contacts.items
})

const mapPropsToDispatch = dispath => ({
  onDeleteContact: (id) => dispath(phonebookActions.deleteContacts(id)),
})

export default connect(mapStateToProps,mapPropsToDispatch)(ContactList);