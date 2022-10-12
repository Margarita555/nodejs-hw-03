const express = require("express");

const router = express.Router();

// const { joiSchema } = require("../../models/contacts");

// const { Contact } = require("../../models");
const Contact = require("../../models/contact");

// const contactsOperations = require("../../repository/contacts");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    // const contacts = await contactsOperations.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
});

// router.get("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     // console.log(contactId);
//     const result = await contactsOperations.getContactById(contactId);
//     if (!result) {
//       const error = new Error(`Contact with id=${contactId} not found`);
//       error.status = 404;
//       throw error;
//     }
//     res.json({
//       status: "success",
//       code: 200,
//       data: {
//         result,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     const { error } = joiSchema.validate(req.body);
//     if (error) {
//       error.status = 400;
//       throw error;
//     }
//     const result = await contactsOperations.addContact(req.body);
//     res.status(201).json({
//       status: "success",
//       code: 201,
//       data: {
//         result,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contactsOperations.removeContact(contactId);
//     if (!result) {
//       const error = new Error(`Contact with id=${contactId} not found`);
//       error.status = 404;
//       throw error;
//     }
//     res.json({
//       status: "success",
//       code: 200,
//       message: "contact deleted",
//       data: {
//         result,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.put("/:contactId", async (req, res, next) => {
//   try {
//     const { error } = joiSchema.validate(req.body);
//     if (error) {
//       error.status = 400;
//       throw error;
//     }
//     const { contactId } = req.params;
//     const result = await contactsOperations.updateContact(contactId, req.body);
//     if (!result) {
//       const error = new Error(`Contact with id=${contactId} not found`);
//       error.status = 404;
//       throw error;
//     }
//     res.json({
//       status: "success",
//       code: 200,
//       data: {
//         result,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
