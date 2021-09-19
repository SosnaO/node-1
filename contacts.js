// const fs = require("fs");
// const fs = require("path");

const contactsPath = require("./db/contacts.json")

async () => {
    try {
        const contacts = await contactsPath.getAll();
        console.log(contacts);
    }
    catch (error) {
        console.log(error.message);
    }
};
// function listContacts() {
//     // ...твой код
// }


// function getContactById(contactId) {
//     // ...твой код
// }

// function removeContact(contactId) {
//     // ...твой код
// }

// function addContact(name, email, phone) {
//     // ...твой код
// }

console.log(contactsPath)