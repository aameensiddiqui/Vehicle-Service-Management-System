package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerRegistration;
import com.example.demo.entities.Login;
import com.example.demo.entities.Rating;
import com.example.demo.entities.RatingDummy;
import com.example.demo.entities.Role;
import com.example.demo.entities.ServiceCenter;
import com.example.demo.services.CustomerService;
import com.example.demo.services.RatingService;
import com.example.demo.services.RoleService;
import com.example.demo.services.ServiceCenterService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RatingController {

	@Autowired
	RatingService rserv;
	
	@Autowired
	ServiceCenterService scserv;
	
	@Autowired
	CustomerService custserv;
	
	@PostMapping("/setRating")
	public Rating setRating(@RequestBody RatingDummy rt) 
	{
		Customer c = custserv.getById(rt.getCustomerid());
		ServiceCenter s = scserv.getScById(rt.getServicecenterid());
		Rating rts=new Rating(rt.getRating(),rt.getComment(),c,s);
		
		System.out.print("Rating");
		return rserv.setRating(rts);
		
	}
	
	@GetMapping("/getRating")
	public int getRating(@RequestParam("scid") int scid) {
		ServiceCenter sc=scserv.getScById(scid);
		System.out.print("Customer Registration");
		return rserv.getRating(sc);
		
	}
	
	
}
