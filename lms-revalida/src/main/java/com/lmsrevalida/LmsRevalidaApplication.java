package com.lmsrevalida;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jooq.revalida.model.tables.pojos.AdminDetails;
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
@CrossOrigin("http://localhost:4200/")
public class LmsRevalidaApplication {

    @Autowired
    private AdminService Adminservice;

    @GetMapping("/admin")
    public List<AdminDetails> getAdmin() {
        return Adminservice.getAdmin();
    }

    @Autowired
    private StudentService Studentservice;

    @GetMapping("/student/regular")
    public List<StudentDetails> getRegularStudents() {
        return Studentservice.getRegularStudents();
    }

    @GetMapping("/student/irregular")
    public List<StudentDetails> getIrregularStudents() {
        return Studentservice.getIrregularStudents();
    }

    @GetMapping("/student")
    public List<StudentDetails> getStudents() {
        return Studentservice.getStudents();
    }

    @GetMapping("/student/active")
    public List<StudentDetails> getActiveStudents() {
        return Studentservice.getActiveStudents();
    }

    @GetMapping("/student/graduate")
    public List<StudentDetails> getGraduateStudents() {
        return Studentservice.getGraduateStudents();
    }

    @PostMapping("/student/addstudent")
    public StudentDetails AddStudent(@RequestBody StudentDetails student) {
        Studentservice.insertStudent(student);
        return null;
    }

    @PatchMapping("updatestudentpassword/{Id}")
    public String updateStudentPassword(@RequestBody StudentDetails student, @PathVariable int Id) {
        Studentservice.updateStudentPassword(student, Id);
        return null;
    }
    
    @GetMapping("attendance/{studentNo}")
    public List<Attendance> getStudentAttendance(@PathVariable String studentNo) {
        return Attendanceservice.getStudentAttendance(studentNo);
    }
	 
	@GetMapping("/attendance")
	public List<Attendance> getAttendance() {
		return Attendanceservice.getAttendance();
	}
	
	
	
	 
	@PostMapping("/attendance/addattendance")
	public Attendance AddAttendance(@RequestBody Attendance attendance) {
		Attendanceservice.insertAttendance(attendance);
		return null;
	}
	
	@Autowired 
	private SubjectService Subjectservice;
	
	 
	@GetMapping("/subjects")
	public List<SubjectTable> getSubjectCS() {
		return Subjectservice.getSubjectCS();
	}
	

	@GetMapping("/BSCS11")
	public List<SubjectTable> getBSCS11() {
		return Subjectservice.getBSCS11();
	}
	
	 
	@GetMapping("/BSCS12")
	public List<SubjectTable> getBSCS12() {
		return Subjectservice.getBSCS12();
	}
	
	 
	@GetMapping("/BSCS21")
	public List<SubjectTable> getBSCS21() {
		return Subjectservice.getBSCS21();
	}
	
	 
	@GetMapping("/BSCS22")
	public List<SubjectTable> getBSCS22() {
		return Subjectservice.getBSCS22();
	}
	
	 
	@GetMapping("/BSCS31")
	public List<SubjectTable> getBSCS31() {
		return Subjectservice.getBSCS31();
	}
	
	 
	@GetMapping("/BSCS32")
	public List<SubjectTable> getBSCS32() {
		return Subjectservice.getBSCS32();
	}
	
	 
	@GetMapping("/BSCS41")
	public List<SubjectTable> getBSCS41() {
		return Subjectservice.getBSCS41();
	}
	
	 
	@GetMapping("/BSCS42")
	public List<SubjectTable> getBSCS42() {
		return Subjectservice.getBSCS42();
	}
	
	
	 
	@GetMapping("/BSIT11")
	public List<SubjectTable> getBSIT11() {
		return Subjectservice.getBSIT11();
	}
	
	 
	@GetMapping("/BSIT12")
	public List<SubjectTable> getBSIT12() {
		return Subjectservice.getBSIT12();
	}
	
	 
	@GetMapping("/BSIT21")
	public List<SubjectTable> getBSIT21() {
		return Subjectservice.getBSIT21();
	}
	
	 
	@GetMapping("/BSIT22")
	public List<SubjectTable> getBSIT22() {
		return Subjectservice.getBSIT22();
	}
	
	 
	@GetMapping("/BSIT31")
	public List<SubjectTable> getBSIT31() {
		return Subjectservice.getBSIT31();
	}
	
	 
	@GetMapping("/BSIT32")
	public List<SubjectTable> getBSIT32() {
		return Subjectservice.getBSIT32();
	}
	
	 
	@GetMapping("/BSIT41")
	public List<SubjectTable> getBSIT41() {
		return Subjectservice.getBSIT41();
	}
	
	 
	@GetMapping("/BSIT42")
	public List<SubjectTable> getBSIT42() {
		return Subjectservice.getBSIT42();
	}
	
	@Autowired
	private
	StudentLoadService Studentloadservice;
	
	public List<StudentLoad> getStudentLoad() {
		return Studentloadservice.getStudentLoad();
	}
	
	@PostMapping("/student/load")
	public StudentLoad insertStudentLoad(@RequestBody StudentLoad load) {
		Studentloadservice.insertStudentLoad(load);
		return null;
	}

    @GetMapping("/BSEE11")
    public List<SubjectTable> getBSEE11() {
        return Subjectservice.getBSEE11();
    }

    @GetMapping("/BSEE12")
    public List<SubjectTable> getBSEE12() {
        return Subjectservice.getBSEE12();
    }

    @GetMapping("/BSEE21")
    public List<SubjectTable> getBSEE21() {
        return Subjectservice.getBSEE21();
    }

    @GetMapping("/BSEE22")
    public List<SubjectTable> getBSEE22() {
        return Subjectservice.getBSEE22();
    }

    @GetMapping("/BSEE31")
    public List<SubjectTable> getBSEE31() {
        return Subjectservice.getBSEE31();
    }

    @GetMapping("/BSEE32")
    public List<SubjectTable> getBSEE32() {
        return Subjectservice.getBSEE32();
    }

    @GetMapping("/BSEE41")
    public List<SubjectTable> getBSEE41() {
        return Subjectservice.getBSEE41();
    }

    @GetMapping("/BSEE42")
    public List<SubjectTable> getBSEE42() {
        return Subjectservice.getBSEE42();
    }


    public static void main(String[] args) {
        SpringApplication.run(LmsRevalidaApplication.class, args);
    }

}
