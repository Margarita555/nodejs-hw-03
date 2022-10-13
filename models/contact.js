// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
// const { Schema, model } = mongoose;
const Joi = require("joi");

// const contactSchema = Schema(
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      // match: /^[0-9]{9}$/
    },
    favorite: {
      type: Boolean,
      // default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    // toJSON: {
    //   virtuals: true,
    //   transform: (doc, ret) => {
    //     delete ret._id;
    //     delete ret.favorite;
    //     return ret;
    //   },
    // },
    // toObject: { virtuals: true },
  }
);

const contactJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.bool(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  contactJoiSchema,
  favoriteJoiSchema,
};

// module.exports = Contact;
// const fs = require("fs/promises");
// const { v4 } = require("uuid");
// const contactsPath = require("./contactsPath");
// const updateContacts = require("./updateContacts");

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   const contacts = JSON.parse(data);
//   return contacts;
// };

// const getContactById = async (contactId) => {
//   const contacts = await listContacts();
//   const result = contacts.find((item) => item.id === contactId);

//   if (!result) {
//     return null;
//   }
//   return result;
// };

// const removeContact = async (contactId) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === contactId);

//   if (index === -1) {
//     return null;
//   }
//   const [removedContact] = contacts.splice(index, 1);
//   await updateContacts(contacts);
//   return removedContact;
// };

// const addContact = async (body) => {
//   const contacts = await listContacts();
//   const newContact = { id: v4(), ...body };
//   contacts.push(newContact);
//   await updateContacts(contacts);

//   return newContact;
// };

// const updateContact = async (contactId, body) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === contactId);
//   if (index === -1) {
//     return null;
//   }
//   contacts[index] = { ...contacts[index], ...body };
//   await updateContacts(contacts);
//   return contacts[index];
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };
