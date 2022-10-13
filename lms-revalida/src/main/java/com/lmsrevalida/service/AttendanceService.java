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

}
