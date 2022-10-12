package com.lmsrevalida.service;

import java.util.List;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jooq.revalida.model.Tables;
import com.jooq.revalida.model.tables.pojos.FacultyDetails;
import com.jooq.revalida.model.tables.pojos.ParentDetails;

@Service
public class FacultyService {
	
	@Autowired
	private DSLContext dslContext;

	public List<FacultyDetails> getFaculty() {
		return dslContext.selectFrom(Tables.FACULTY_DETAILS)
				.fetchInto(FacultyDetails.class);
	}
	
	public void insertFaculty(FacultyDetails faculty) {
		dslContext.insertInto(Tables.FACULTY_DETAILS,Tables.FACULTY_DETAILS.FACULTY_NAME
				,Tables.FACULTY_DETAILS.WORK,Tables.FACULTY_DETAILS.STATUS,Tables.FACULTY_DETAILS.ACTIVE_DEACTIVE)
		.values(faculty.getFacultyName(),faculty.getWork(),faculty.getStatus(),faculty.getActiveDeactive()).execute();
	}
}
