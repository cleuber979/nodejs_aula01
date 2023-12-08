//esta aula e destinada ha exportar pelo node objeto ou qualquer coisa no meu backend


const nome = 'Cleuber';
const sobrenome ='Barbosa';

const falaNome =()=> nome+ ' '  + sobrenome;

module.exports.nome= nome;
module.exports.sobrenome= sobrenome;
exports.falaNome=falaNome;
this.qualquercoisa='posso exportar qualquer coisa';

//console.log(exports);