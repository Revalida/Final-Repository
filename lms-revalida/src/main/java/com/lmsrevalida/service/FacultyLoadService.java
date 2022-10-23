package com.lmsrevalida.service;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jooq.revalida.model.Tables;
import com.jooq.revalida.model.tables.pojos.ProfessorLoad;

@Service
public class FacultyLoadService {
	
	@Autowired
	private DSLContext dslContext;
	
	public void insertFacultyLoad(ProfessorLoad load) {
		dslContext.insertInto(Tables.PROFESSOR_LOAD,Tables.PROFESSOR_LOAD.SUBJECT_TITLE,Tables.PROFESSOR_LOAD.SECTION
				,Tables.PROFESSOR_LOAD.YEAR_LEVEL,Tables.PROFESSOR_LOAD.FACULTY_NO,Tables.PROFESSOR_LOAD.SCHEDULE)
		.values(load.getSubjectTitle(),load.getSection(),load.getYearLevel(),load.getFacultyNo(),load.getSchedule())
		.execute();
	}

}
