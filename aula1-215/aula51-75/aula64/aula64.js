const pessoa = {
    nome: 'Bruno',
    canal: 'CFB Cursos',
    curso: 'JavaScript',
    aulas:{
        aula01: 'Introdução',
        aula02: 'Variáveis',
        aula03: 'Condicional'
    }
}

const string_pessoa = '{"nome":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

console.log(pessoa)
const s_json = JSON.stringify(pessoa) // de objeto a string json
console.log(s_json)
const o_json = JSON.parse(s_json) // de string json a objeto
console.log(o_json)