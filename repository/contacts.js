const Contact = require("../models/contact");

const listContacts = async () => {
  const result = await Contact.find({});
  return result;
};

module.exports = {
  listContacts,
  //   getContactById,
  //   removeContact,
  //   addContact,
  //   updateContact,
};
