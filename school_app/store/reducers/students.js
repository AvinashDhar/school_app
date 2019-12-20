import STUDENTS from '../../data/dummy-data';

const initialState = {
    availableStudents: STUDENTS,
    teacherStudents: STUDENTS.filter(student => student.teacherId == 't1')
};

export default (state = initialState, action) => {
    return state;
};