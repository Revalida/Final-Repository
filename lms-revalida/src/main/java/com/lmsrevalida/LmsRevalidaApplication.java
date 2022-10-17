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

import com.jooq.revalida.model.tables.pojos.AdminTable;
import com.jooq.revalida.model.tables.pojos.Attendance;
import com.jooq.revalida.model.tables.pojos.FacultyDetails;
import com.jooq.revalida.model.tables.pojos.ParentDetails;
import com.jooq.revalida.model.tables.pojos.StudentDetails;
import com.jooq.revalida.model.tables.pojos.SubjectTable;
import com.lmsrevalida.service.AdminService;
import com.lmsrevalida.service.AttendanceService;
import com.lmsrevalida.service.FacultyService;
import com.lmsrevalida.service.ParentService;
import com.lmsrevalida.service.StudentService;
import com.lmsrevalida.service.SubjectService;


@SpringBootApplication
@RestController
public class LmsRevalidaApplication {
	
	@Autowired 
	private AdminService Adminservice;
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/admin")
	public List<AdminTable> getAdmin() {
		return Adminservice.getAdmin();
	}
	
	@Autowired
	private StudentService Studentservice;
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/student/regular")
	public List<StudentDetails> getRegularStudents() {
		return Studentservice.getRegularStudents();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/student/irregular")
	public List<StudentDetails> getIrregularStudents() {
		return Studentservice.getIrregularStudents();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/student/active")
	public List<StudentDetails> getActiveStudents() {
		return Studentservice.getActiveStudents();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/student/graduate")
	public List<StudentDetails> getGraduateStudents() {
		return Studentservice.getGraduateStudents();
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
	
	@Autowired
	private AttendanceService Attendanceservice;
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/attendance")
	public List<Attendance> getAttendance() {
		return Attendanceservice.getAttendance();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@PostMapping("/attendance/addattendance")
	public StudentDetails AddAttendance(@RequestBody Attendance attendance) {
		Attendanceservice.insertAttendance(attendance);
		return null;
	}
	
	@Autowired
	private SubjectService Subjectservice;
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSCS11")
	public List<SubjectTable> getBSCS11() {
		return Subjectservice.getBSCS11();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSCS12")
	public List<SubjectTable> getBSCS12() {
		return Subjectservice.getBSCS12();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSCS21")
	public List<SubjectTable> getBSCS21() {
		return Subjectservice.getBSCS21();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSCS22")
	public List<SubjectTable> getBSCS22() {
		return Subjectservice.getBSCS22();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSCS31")
	public List<SubjectTable> getBSCS31() {
		return Subjectservice.getBSCS31();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSCS32")
	public List<SubjectTable> getBSCS32() {
		return Subjectservice.getBSCS32();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSCS41")
	public List<SubjectTable> getBSCS41() {
		return Subjectservice.getBSCS41();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSCS42")
	public List<SubjectTable> getBSCS42() {
		return Subjectservice.getBSCS42();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSEE11")
	public List<SubjectTable> getBSEE11() {
		return Subjectservice.getBSEE11();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSEE12")
	public List<SubjectTable> getBSEE12() {
		return Subjectservice.getBSEE12();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSEE21")
	public List<SubjectTable> getBSEE21() {
		return Subjectservice.getBSEE21();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSEE22")
	public List<SubjectTable> getBSEE22() {
		return Subjectservice.getBSEE22();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSEE31")
	public List<SubjectTable> getBSEE31() {
		return Subjectservice.getBSEE31();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSEE32")
	public List<SubjectTable> getBSEE32() {
		return Subjectservice.getBSEE32();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSEE41")
	public List<SubjectTable> getBSEE41() {
		return Subjectservice.getBSEE41();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSEE42")
	public List<SubjectTable> getBSEE42() {
		return Subjectservice.getBSEE42();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSIT11")
	public List<SubjectTable> getBSIT11() {
		return Subjectservice.getBSIT11();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSIT12")
	public List<SubjectTable> getBSIT12() {
		return Subjectservice.getBSIT12();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSIT21")
	public List<SubjectTable> getBSIT21() {
		return Subjectservice.getBSIT21();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSIT22")
	public List<SubjectTable> getBSIT22() {
		return Subjectservice.getBSIT22();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSIT31")
	public List<SubjectTable> getBSIT31() {
		return Subjectservice.getBSIT31();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSIT32")
	public List<SubjectTable> getBSIT32() {
		return Subjectservice.getBSIT32();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSIT41")
	public List<SubjectTable> getBSIT41() {
		return Subjectservice.getBSIT41();
	}
	
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/BSIT42")
	public List<SubjectTable> getBSIT42() {
		return Subjectservice.getBSIT42();
	}
	
	
	public static void main(String[] args) {
		SpringApplication.run(LmsRevalidaApplication.class, args);
	}
	
}
