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
				,Tables.ATTENDANCE.STUDENT_FIRSTNAME,Tables.ATTENDANCE.STUDENT_MIDDLENAME,Tables.ATTENDANCE.STUDENT_LASTNAME
				,Tables.ATTENDANCE.STATUS,Tables.ATTENDANCE.SUBJECT_CODE)
		.values(attendance.getStudentNo(),attendance.getStudentFirstname(),attendance.getStudentMiddlename(),attendance.getStudentLastname(),attendance.getStatus()
,attendance.getSubjectCode()).execute();
	}
	
	public List<Attendance> getStudentAttendance(String id) {
        return dslContext.selectFrom(Tables.ATTENDANCE)
                .where(Tables.ATTENDANCE.STUDENT_NO.eq(id))
                .fetchInto(Attendance.class);
    }
}
