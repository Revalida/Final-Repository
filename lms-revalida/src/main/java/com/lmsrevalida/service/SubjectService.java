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
	
	public List<SubjectTable> getAllSubjects() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getSubjectCS() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSCS"))
				.fetchInto(SubjectTable.class);
	}

	public List<SubjectTable> getBSCS11() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSCS"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("1st"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSCS12() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSCS"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("1st"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSCS21() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSCS"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("2nd"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSCS22() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSCS"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("2nd"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSCS31() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSCS"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("3rd"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSCS32() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSCS"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("3rd"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSCS41() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSCS"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("4th"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSCS42() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSCS"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("4th"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSEE11() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSEE"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("1st"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSEE12() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSEE"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("1st"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSEE21() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSEE"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("2nd"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSEE22() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSEE"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("2nd"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSEE31() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSEE"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("3rd"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSEE32() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSEE"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("3rd"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSEE41() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSEE"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("4th"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSEE42() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSEE"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("4th"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSIT11() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSIT"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("1st"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSIT12() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSIT"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("1st"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSIT21() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSIT"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("2nd"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSIT22() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSIT"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("2nd"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSIT31() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSIT"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("3rd"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSIT32() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSIT"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("3rd"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSIT41() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSIT"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("4th"),
						Tables.SUBJECT_TABLE.SEM.eq("1st"))
				.fetchInto(SubjectTable.class);
	}
	
	public List<SubjectTable> getBSIT42() {
		return dslContext.selectFrom(Tables.SUBJECT_TABLE)
				.where(Tables.SUBJECT_TABLE.COURSE.eq("BSIT"),
						Tables.SUBJECT_TABLE.YEAR_LEVEL.eq("4th"),
						Tables.SUBJECT_TABLE.SEM.eq("2nd"))
				.fetchInto(SubjectTable.class);
	}
	
	
	   public List<SubjectTable> getStudentSubject(String course) {
	        return dslContext.selectFrom(Tables.SUBJECT_TABLE)
	                .where(Tables.SUBJECT_TABLE.COURSE.eq(course))
	                .fetchInto(SubjectTable.class);
	    }
	

}
