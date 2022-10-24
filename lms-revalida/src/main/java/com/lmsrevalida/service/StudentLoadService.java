package com.lmsrevalida.service;

import java.util.List;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jooq.revalida.model.Tables;
import com.jooq.revalida.model.tables.pojos.Attendance;
import com.jooq.revalida.model.tables.pojos.StudentLoad;

@Service
public class StudentLoadService {

	@Autowired
	private DSLContext dslContext;
	
	public List<StudentLoad> getStudentLoad() {
		return dslContext.selectFrom(Tables.STUDENT_LOAD)
				.fetchInto(StudentLoad.class);
	}
	
	public void insertStudentLoad(StudentLoad load) {
		dslContext.insertInto(Tables.STUDENT_LOAD,Tables.STUDENT_LOAD.STUDENT_NO,Tables.STUDENT_LOAD.SUBJECT_CODE
				,Tables.STUDENT_LOAD.SECTION,Tables.STUDENT_LOAD.YEARLEVEL,Tables.STUDENT_LOAD.SCHEDULE
				,Tables.STUDENT_LOAD.FACULTY_NO,Tables.STUDENT_LOAD.SEM)
		.values(load.getStudentNo(),load.getSubjectCode(),load.getSection(),load.getYearlevel(),load.getSchedule()
				,load.getFacultyNo(),load.getSem()).execute();
	}
	
	public List<StudentLoad> getStudentLoads(String id) {
        return dslContext.selectFrom(Tables.STUDENT_LOAD)
                .where(Tables.STUDENT_LOAD.STUDENT_NO.eq(id))
                .fetchInto(StudentLoad.class);
        }
}
