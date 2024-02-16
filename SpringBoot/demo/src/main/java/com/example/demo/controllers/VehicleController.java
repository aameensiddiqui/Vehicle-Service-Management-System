package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Brand;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Vehicle;
import com.example.demo.entities.VehicleRegistration;
import com.example.demo.services.BrandService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.VehicleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VehicleController {

	@Autowired
	VehicleService vehserv;
	
	@Autowired
	BrandService brandserv;
	
	@Autowired
	CustomerService custserv;
	
	@GetMapping("/allvehicles")
	public List<Vehicle> getVehicles()
	{
		return vehserv.getVehicles();
	}
	
	@GetMapping("/getVehiclesByCid")
	public List<Vehicle> getVehiclesByCid(@RequestParam("cid") int cid)
	{
		Customer customer =custserv.getById(cid);
		return vehserv.getVehiclesByCid(customer);
	}
	
	@GetMapping("/getVehiclesById")
	public Vehicle getVehicleById(@RequestParam("vid") int vid)
	{
		return vehserv.getVehicleById(vid);
	}
	
	@GetMapping("/getVehiclesByCidBid")
	public List<Vehicle> getVehiclesByCidBid(@RequestParam("cid") int cid,@RequestParam("bid") int bid)
	{
		Customer customer =custserv.getById(cid);
		Brand brand=brandserv.getById(bid);
		return vehserv.getVehiclesByCidBid(customer,brand);
		
	}
	
	
	@PostMapping("/registervehicle")
	public Vehicle register(@RequestBody VehicleRegistration vehicle) {
		
		Brand brand=brandserv.getById(vehicle.getBrandid());
		Customer customer=custserv.getById(vehicle.getCustomerid());
		Vehicle veh=new Vehicle(vehicle.getNumber(),vehicle.getModel(),vehicle.getFueltype(),vehicle.getRegyear(),brand,customer);
		return vehserv.save(veh);
	}
}
