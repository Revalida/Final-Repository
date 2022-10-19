package com.lmsrevalida.service;

import java.util.List;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jooq.revalida.model.Tables;
import com.jooq.revalida.model.tables.pojos.Attendance;

@Service
public class AttendanceService {

	@Autowired
	private DSLContext dslContext;

	public List<Attendance> getAttendance() {
		return dslContext.selectFrom(Tables.ATTENDANCE)
				.fetchInto(Attendance.class);
	}
	
	public void insertAttendance(Attendance attendance) {
		dslContext.insertInto(Tables.ATTENDANCE,Tables.ATTENDANCE.STUDENT_NO
				,Tables.ATTENDANCE.FIRST_NAME,Tables.ATTENDANCE.MIDDLE_NAME,Tables.ATTENDANCE.LAST_NAME
				,Tables.ATTENDANCE.STATUS,Tables.ATTENDANCE.SUBJECT_CODE)
		.values(attendance.getStudentNo(),attendance.getFirstName(),attendance.getMiddleName(),attendance.getLastName(),attendance.getStatus()
,attendance.getSubjectCode()).execute();
	}
	
	
}
