package com.lmsrevalida.service;

import java.util.List;


import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jooq.revalida.model.Tables;
import com.jooq.revalida.model.tables.AdminDetails;


@Service
public class AdminService {

	@Autowired
	private DSLContext dslContext;

	public List<AdminDetails> getAdmin() {
		return dslContext.selectFrom(Tables.ADMIN_DETAILS)
				.fetchInto(AdminDetails.class);
	}
}
