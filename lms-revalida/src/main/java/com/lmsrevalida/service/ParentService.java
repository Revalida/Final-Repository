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
		dslContext.insertInto(Tables.PARENT_DETAILS,Tables.PARENT_DETAILS.PARENT_FIRSTNAME
				,Tables.PARENT_DETAILS.PARENT_LASTNAME,Tables.PARENT_DETAILS.STUDENT_NO)
		.values(parent.getParentFirstname(),parent.getParentLastname(),parent.getStudentNo()).execute();
	}
	
	public void updateParentPassword(ParentDetails parent, int Id) {
		dslContext.update(Tables.PARENT_DETAILS)
		.set(Tables.PARENT_DETAILS.PARENT_PASSWORD, parent.getParentPassword())
		.where(Tables.PARENT_DETAILS.ID.eq(Id))
		.execute();
	}
}


