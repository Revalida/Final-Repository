package com.lmsrevalida.service;

import java.util.List;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jooq.revalida.model.Tables;
import com.jooq.revalida.model.tables.pojos.ProfessorLoad;

    @Service
    public class ProfessorService {
        
        @Autowired
        private DSLContext dslContext;
        public List<ProfessorLoad> getSubject(String facultyNo ) {
            return dslContext.selectFrom(Tables.PROFESSOR_LOAD)
                    .where(Tables.PROFESSOR_LOAD.FACULTY_NO.eq(facultyNo))
                    .fetchInto(ProfessorLoad.class);
            }
 
        
    }
