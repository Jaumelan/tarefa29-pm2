const fs = require('fs');

module.exports = function birthdates(param) {
    const rawData = JSON.parse( fs.readFileSync("database.json") );
    
    const aniversariantes = rawData.filter(user => {
        let [day , month , year] = user.birthDate.split("/");
        
        if ( Number(month) === Number(param) ) {
            let a = {name: user.name, birth: user.birthDate};
            
            return true;
        } else { 
            return false;
        }
    }).map(({name, birthDate}) => ({name, birth: birthDate}))

    const sortAniversariantes = aniversariantes.sort((a,b) => a.birth.localeCompare(b.birth))
    return sortAniversariantes
}