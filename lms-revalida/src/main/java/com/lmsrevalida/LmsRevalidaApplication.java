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

import com.jooq.revalida.model.tables.pojos.FacultyDetails;
import com.jooq.revalida.model.tables.pojos.ParentDetails;
import com.jooq.revalida.model.tables.pojos.StudentDetails;
import com.lmsrevalida.service.FacultyService;
import com.lmsrevalida.service.ParentService;
import com.lmsrevalida.service.StudentService;

@SpringBootApplication
@RestController
public class LmsRevalidaApplication {
	
	@Autowired
	private StudentService Studentservice;
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/student")
	public List<StudentDetails> getStudents() {
		return Studentservice.getStudents();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@PostMapping("/student/addstudent")
	public StudentDetails AddStudent(@RequestBody StudentDetails student) {
		Studentservice.insertStudent(student);
		return null;
	}
	
	@Autowired 
	private ParentService Parentservice;
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/parent")
	public List<ParentDetails> getParents() {
		return Parentservice.getParents();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@PostMapping("/parent/addparent")
	public ParentDetails AddParent(@RequestBody ParentDetails parent) {
		Parentservice.insertParent(parent);
		return null;
	}
	
	@Autowired
	private FacultyService Facultyservice;
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/faculty")
	public List<FacultyDetails> getFaculty() {
		return Facultyservice.getFaculty();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@PostMapping("/faculty/addfaculty")
	public FacultyDetails AddFaculty(@RequestBody FacultyDetails faculty) {
		Facultyservice.insertFaculty(faculty);
		return null;
	}

	public static void main(String[] args) {
		SpringApplication.run(LmsRevalidaApplication.class, args);
	}

}
