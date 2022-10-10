package com.lmsrevalida;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jooq.revalida.model.tables.pojos.StudentDetails;
import com.lmsrevalida.service.StudentService;

@SpringBootApplication
@RestController
public class LmsRevalidaApplication {
	
	@Autowired
	private StudentService service;
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/student")
	public List<StudentDetails> getStudents() {
		return service.getStudents();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@PostMapping("/student/addstudent")
	public StudentDetails AddStudent(@RequestBody StudentDetails student) {
		service.insertStudent(student);
		return student;
	}

	public static void main(String[] args) {
		SpringApplication.run(LmsRevalidaApplication.class, args);
	}

}
