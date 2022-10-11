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
	
	public List<StudentDetails> getStudents() {
		return dslContext.selectFrom(Tables.STUDENT_DETAILS)
				.fetchInto(StudentDetails.class);
	}
	
	public void insertStudent(StudentDetails student) {
		dslContext.insertInto(Tables.STUDENT_DETAILS,Tables.STUDENT_DETAILS.FIRST_NAME
				,Tables.STUDENT_DETAILS.MIDDLE_NAME,Tables.STUDENT_DETAILS.LAST_NAME
				,Tables.STUDENT_DETAILS.COURSE,Tables.STUDENT_DETAILS.SECTION,Tables.STUDENT_DETAILS.SEM
				,Tables.STUDENT_DETAILS.YEAR_LEVEL)
		.values(student.getFirstName(),student.getMiddleName(),student.getLastName(),student.getCourse(),student.getSection()
,student.getSem(),student.getYearLevel()).execute();
	}
}
