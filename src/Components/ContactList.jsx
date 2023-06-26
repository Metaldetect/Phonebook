import React from "react";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="list-group">
      {contacts.map(contact => (
        <li
          key={contact.id}
          className="list-group-item d-flex align-items-center justify-content-center flex-wrap w-25 mx-auto mb-4 gap-3"
        >
          <span>{contact.name}</span>
          <span>{contact.phone}</span>
          <button
            className="btn btn-warning"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;