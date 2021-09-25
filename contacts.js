const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
    const contacts = await fs.readFile(contactsPath);
    const allContacts = JSON.parse(contacts);
    console.table(allContacts)
    return allContacts;
};

async function getContactById(contactId) {
    const contacts = await fs.readFile(contactsPath);
    const allContacts = JSON.parse(contacts);
    const contactById = allContacts.find(contact => contact.id === Number(contactId));
    console.log(contactById);
    return allContacts[contactById]
};

async function removeContact(contactId) {
    const contacts = await fs.readFile(contactsPath);
    const allContacts = JSON.parse(contacts);
        const contactById = allContacts.findIndex(contact => contact.id === Number(contactId));
    if (contactById === -1) {
        return null;
    }
    allContacts.splice(contactById, 1)
    await fs.writeFile(contactsPath, JSON.stringify(allContacts));
    console.log(`Contact with id ${contactId} deleted`)
    return true;
};

async function addContact(name, email, phone) {
    const contacts = await fs.readFile(contactsPath);
    const allContacts = JSON.parse(contacts);
    const newContact = {
        id: allContacts.length + 1,
        name,
        email,
        phone,
    };
    allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts));
    console.log(`Contact with name ${name}, email ${email}, phone ${phone} is added`)
    return newContact
};

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
};
