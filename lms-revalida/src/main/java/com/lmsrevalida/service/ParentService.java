package com.lmsrevalida.service;

import java.util.List;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jooq.revalida.model.Tables;
import com.jooq.revalida.model.tables.pojos.ParentDetails;

@Service
public class ParentService {
	
	@Autowired
	private DSLContext dslContext;
	
	public List<ParentDetails> getParents() {
		return dslContext.selectFrom(Tables.PARENT_DETAILS)
				.fetchInto(ParentDetails.class);
	}
	
	public void insertParent(ParentDetails parent) {
		dslContext.insertInto(Tables.PARENT_DETAILS,Tables.PARENT_DETAILS.FULL_NAME
				,Tables.PARENT_DETAILS.PASSWORD,Tables.PARENT_DETAILS.TYPE)
		.values(parent.getFullName(),parent.getPassword(),parent.getType()).execute();
	}
}


