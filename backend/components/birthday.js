const fs = require('fs');

module.exports = function birthdates(param) {
    const rawData = JSON.parse( fs.readFileSync("database.json") );
    
    const aniversariantes = rawData.filter(user => {
        let [year , month , day] = user.birthDate.split("-");
        
        if ( Number(month) === Number(param) ) {
            //let a = {name: user.name, birth: user.birthDate};
            
            return true;
        } else { 
            return false;
        }
    }).map(({name, birthDay}) => ({name, birth: birthDay}))

    const sortAniversariantes = aniversariantes.sort((a,b) => a.birth.localeCompare(b.birth))
    return sortAniversariantes
}