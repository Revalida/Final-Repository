package com.lmsrevalida.service;

import java.util.List;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jooq.revalida.model.Tables;
import com.jooq.revalida.model.tables.pojos.GradesTable;


@Service
public class GradesService {
    @Autowired
    private DSLContext dslContext;
    public void insertGrade(GradesTable grade) {
        dslContext.insertInto(Tables.GRADES_TABLE,Tables.GRADES_TABLE.COMMENT
                ,Tables.GRADES_TABLE.REMARKS,Tables.GRADES_TABLE.STUDENT_NO, Tables.GRADES_TABLE.SUBJECT_CODE,Tables.GRADES_TABLE.SECTION, Tables.GRADES_TABLE.GRADE)
        .values(grade.getComment(),grade.getRemarks(),grade.getStudentNo(),grade.getSubjectCode(),grade.getSection(),grade.getGrade()).execute();
    }
    

    public List<GradesTable> getStudentGrade(String studentNo) {
        return dslContext.selectFrom(Tables.GRADES_TABLE)
                .where(Tables.GRADES_TABLE.STUDENT_NO.eq(studentNo))
                .fetchInto(GradesTable.class);
    }
}
