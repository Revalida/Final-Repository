package com.lmsrevalida.service;

import java.util.List;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jooq.revalida.model.Tables;
import com.jooq.revalida.model.tables.pojos.AdminTable;

@Service
public class AdminService {

	
	@Autowired
	private DSLContext dslContext;

	public List<AdminTable> getAdmin() {
		return dslContext.selectFrom(Tables.ADMIN_TABLE)
				.fetchInto(AdminTable.class);
	}
}
