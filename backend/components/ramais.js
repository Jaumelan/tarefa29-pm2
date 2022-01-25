const fs = require('fs');

module.exports = function onlyPhones() {
    const rawData = JSON.parse( fs.readFileSync("database.json") );
    const onlyPhones = rawData.map( ({name, phoneExtension}) => ({name, phone: phoneExtension}));
    const phoneAlfabet = onlyPhones.sort((a, b) => a.name.localeCompare(b.name));

    return phoneAlfabet;
}

