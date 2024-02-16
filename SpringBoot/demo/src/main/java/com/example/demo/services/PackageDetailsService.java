package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.PackageDetails;
import com.example.demo.repositories.PackageDetailsRepository;

@Service
public class PackageDetailsService {
	
	@Autowired
	PackageDetailsRepository pdrepo;
	
	public PackageDetails save(PackageDetails packageDetails)
	{
		return pdrepo.save(packageDetails);
	}
	
	public List<PackageDetails> getPackages()
	{
		return pdrepo.findAll();
	}
	
	public PackageDetails getPackageById(int id)
	{
		return pdrepo.findById(id).get();
	}
	
	public List<PackageDetails> getPackageByScId(int scid)
	{
		return pdrepo.getPackageByScId(scid);
	}
	
	 
}
