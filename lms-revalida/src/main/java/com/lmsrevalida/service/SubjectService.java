package com.lmsrevalida.service;

import java.util.List;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jooq.revalida.model.Tables;
import com.jooq.revalida.model.tables.pojos.SubjectTable;

@Service
public class SubjectService {
	
	@Autowired
	private DSLContext dslContext;

	public List<SubjectTable> getSubject() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.fetchInto(SubjectTable.class);
	}

}
