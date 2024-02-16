package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.PackageDetails;
import com.example.demo.services.PackageDetailsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PackageDetailsController {
	@Autowired
	PackageDetailsService pdserv;
	
	@GetMapping("/getPackageDetails")
	public List<PackageDetails> getPackages()
	{
		return pdserv.getPackages();
	}
	
	
	@GetMapping("/addPackageDetails")
	public PackageDetails save(@RequestBody PackageDetails packageDetails) {
		return pdserv.save(packageDetails);
	}
	
	@GetMapping("/getPackageById")
	public PackageDetails getPackageById(@RequestParam("id") int id) {
		return pdserv.getPackageById(id);
	}
	
	@GetMapping("/getPackageByScId")
	public List<PackageDetails> getPackageByScId(@RequestParam("scid") int scid) {
		return pdserv.getPackageByScId(scid);
	}
}
