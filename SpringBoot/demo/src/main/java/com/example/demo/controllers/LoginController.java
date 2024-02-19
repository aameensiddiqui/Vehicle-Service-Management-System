/*
  package com.example.demo.controllers;
 

import java.util.List;
import java.util.ListIterator;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Question;
import com.example.demo.services.LoginService;
import com.example.demo.services.QuestionService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
	
	@Autowired
	LoginService logserv;
	
	@Autowired
	QuestionService qserv;
	
	@GetMapping("/all")
	public List<Login> getAllUsers()
	{
		return logserv.getAllUsers();
	}
	
	@PostMapping("/logincheck")
	public Login logincheck(@RequestBody Login login)
	{
		// Removed the salt and encryption
		String password = login.getPassword();
		return logserv.getLogin(login.getUserid(), password);
	}
	
	@GetMapping("/getLoginByLoginid")
	public Login getLoginByLoginid(@RequestParam("loginid") int loginid)
	{
		return logserv.getLoginByLoginid(loginid);
	}
	
	@PostMapping("/checkAnswer")
	public Login checkLoginAnswer(@RequestParam("userid") String userid,@RequestParam("answer") String answer)
	{		
		return logserv.checkLoginAnswer(answer,userid);
	}
	
	@PostMapping("/changePwd")
	public int changePassword(@RequestParam("newPwd") String newpassword,@RequestParam("userid") String userid )
	{
		// Removed the salt and encryption
		String password = newpassword;
		return  logserv.changePassword(password, userid);
	}
	
	@PatchMapping("/updateReq/{loginid}")
	public Login updateReq(@PathVariable("loginid") int loginid,@RequestBody Map<String,Object> field)
	{
		return logserv.updateByField(loginid,field);
	}
}
*/



package com.example.demo.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
    
    @Autowired
    LoginService logserv;
    
    @GetMapping("/all")
    public List<Login> getAllUsers() {
        return logserv.getAllUsers();
    }
    
    @GetMapping("/serviceCenters")
    public List<Login> getServiceCenters() {
        return logserv.getServiceCentersByRoleId();
    }
    
    @PostMapping("/logincheck")
    public Login logincheck(@RequestBody Login login) {
        // Removed the salt and encryption
        String password = login.getPassword();
        return logserv.getLogin(login.getUserid(), password);
    }
    
    @GetMapping("/getLoginByLoginid")
    public Login getLoginByLoginid(@RequestParam("loginid") int loginid) {
        return logserv.getLoginByLoginid(loginid);
    }
    
    @PostMapping("/checkAnswer")
    public Login checkLoginAnswer(@RequestParam("userid") String userid, @RequestParam("answer") String answer) {        
        return logserv.checkLoginAnswer(answer, userid);
    }
    
    @PostMapping("/changePwd")
    public int changePassword(@RequestParam("newPwd") String newpassword, @RequestParam("userid") String userid) {
        
        String password = newpassword;
        return  logserv.changePassword(password, userid);
    }
    
    @PatchMapping("/updateReq/{loginid}")
    public Login updateReq(@PathVariable("loginid") int loginid, @RequestBody Map<String, Object> field) {
        return logserv.updateByField(loginid, field);
    }
    
  
}
