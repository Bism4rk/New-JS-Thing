const cursos = ['JavaScript','HTML', 'CSS', 'Arduino', 'Raspberry Pi', 'C++', 'Python', 'Java', 'C#']

export default function getTodosCursos(){
    return cursos
}

function getCurso (i_curso) {
    return cursos[i_curso]
}

export {cursos, getCurso}
