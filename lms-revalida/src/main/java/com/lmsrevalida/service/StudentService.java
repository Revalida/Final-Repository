package com.lmsrevalida.service;

import java.util.List;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jooq.revalida.model.Tables;
import com.jooq.revalida.model.tables.pojos.StudentDetails;

@Service
public class StudentService {
	
	@Autowired
	private DSLContext dslContext;
	
	public List<StudentDetails> getRegularStudents() {
		return dslContext.selectFrom(Tables.STUDENT_DETAILS)
				.where(Tables.STUDENT_DETAILS.STATUS.eq("Regular"))
				.fetchInto(StudentDetails.class);
	}
	
	public List<StudentDetails> getIrregularStudents() {
		return dslContext.selectFrom(Tables.STUDENT_DETAILS)
				.where(Tables.STUDENT_DETAILS.STATUS.eq("Irregular"))
				.fetchInto(StudentDetails.class);
	}
	
	public List<StudentDetails> getGraduateStudents() {
		return dslContext.selectFrom(Tables.STUDENT_DETAILS)
				.where(Tables.STUDENT_DETAILS.STATUS.eq("Graduate"))
				.fetchInto(StudentDetails.class);
	}
	
	public List<StudentDetails> getActiveStudents() {
		return dslContext.selectFrom(Tables.STUDENT_DETAILS)
				.where(Tables.STUDENT_DETAILS.ACTIVE_DEACTIVE.eq("Active"))
				.fetchInto(StudentDetails.class);
	}
	
	public List<StudentDetails> getStudents() {
		return dslContext.selectFrom(Tables.STUDENT_DETAILS)
				.fetchInto(StudentDetails.class);
	}
	
	public void insertStudent(StudentDetails student) {
		dslContext.insertInto(Tables.STUDENT_DETAILS,Tables.STUDENT_DETAILS.STUDENT_FIRSTNAME
				,Tables.STUDENT_DETAILS.STUDENT_MIDDLENAME,Tables.STUDENT_DETAILS.STUDENT_LASTNAME
				,Tables.STUDENT_DETAILS.COURSE,Tables.STUDENT_DETAILS.SECTION,Tables.STUDENT_DETAILS.SEM
				,Tables.STUDENT_DETAILS.YEAR_LEVEL)
		.values(student.getStudentFirstname(),student.getStudentMiddlename(),student.getStudentLastname(),student.getCourse(),student.getSection()
,student.getSem(),student.getYearLevel()).execute();
	}
	

	public void updateStudentPassword(StudentDetails student, int Id) {
        dslContext.update(Tables.STUDENT_DETAILS)
        .set(Tables.STUDENT_DETAILS.STUDENT_PASSWORD, student.getStudentPassword())
        .where(Tables.STUDENT_DETAILS.ID.eq(Id))
        .execute();
    }
	
	public void updateStudentParent(StudentDetails student, int Id) {
		dslContext.update(Tables.STUDENT_DETAILS)
		.set(Tables.STUDENT_DETAILS.PARENT_FIRSTNAME, student.getParentFirstname())
		.where(Tables.STUDENT_DETAILS.ID.eq(Id))
		.execute();
	}
	

}
