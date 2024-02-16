package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.ServiceCenter;
import com.example.demo.repositories.ServiceCenterRepository;

@Service
public class ServiceCenterService {

	@Autowired
	ServiceCenterRepository screpo;
	
	public ServiceCenter save(ServiceCenter serviceCenter)
	{
		return screpo.save(serviceCenter);
	}
	
	public int getBookingLimitScById(int scid)
	{
		return screpo.getBookingLimitScById(scid);
	}
	
	public ServiceCenter getScById(int scid)
	{
		return screpo.findById(scid).get();
	}
	
	public List<ServiceCenter> getServiceCenters() {
		return screpo.findAll();
	}
	
	public List<ServiceCenter> getServiceCentersbyArea(int id)
	{
		return  screpo.getServiceCentersbyArea(id);
	}
	
	public List<ServiceCenter> getServiceCentersbyBrand(int id)
	{
		return  screpo.getServiceCentersbyBrand(id);
	}
	
	public List<ServiceCenter> getScByBrandArea(int brandid,int areaid)
	{
		return  screpo.getScByBrandArea(brandid,areaid);
	}
	
	public ServiceCenter getDetailsByLoginid(Login login)
	{
		return screpo.getDetailsByLoginid(login);
	}
	
}
