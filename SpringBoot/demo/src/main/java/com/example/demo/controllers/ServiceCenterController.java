package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.Brand;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.ServiceCenter;
import com.example.demo.entities.ServiceCenterRegistration;
import com.example.demo.services.AreaService;
import com.example.demo.services.BrandService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.ServiceCenterService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ServiceCenterController {
    @Autowired
    ServiceCenterService scserv;
    
    @Autowired
    RoleService roleserv;
    @Autowired
    AreaService areaserv;
    @Autowired
    LoginService logserv;
    @Autowired
    BrandService brandserv;
    @Autowired
    LoginService loginserv;
    
    @GetMapping("/allservicecenters")
    public List<ServiceCenter> getServiceCenters()
    {
        return scserv.getServiceCenters();
    }
    
    @GetMapping("/getServiceCenterbyArea")
    public List<ServiceCenter> getServiceCentersbyArea(@RequestParam("aid") int id)
    {
        return scserv.getServiceCentersbyArea(id);
    }
    
    @GetMapping("/getServiceCenterbyBrand")
    public List<ServiceCenter> getServiceCentersbyBrand(@RequestParam("bid") int id)
    {
        return scserv.getServiceCentersbyBrand(id);
    }
    
    @GetMapping("/getScDetailsByLoginid")
    public ServiceCenter getDetailsByLoginid(@RequestParam("loginid") int loginid)
    {
        Login login=loginserv.getLoginByLoginid(loginid);
        return scserv.getDetailsByLoginid(login);
    }
    
    @GetMapping("/getScByBrandArea")
    public List<ServiceCenter> getScByBrandArea(@RequestParam("bid") int brandid, @RequestParam("aid")int areaid)
    {
        return scserv.getScByBrandArea(brandid,areaid);
    }
    
    @GetMapping("/getScById")
    public ServiceCenter getScById(@RequestParam("scid") int scid)
    {
        return scserv.getScById(scid);
    }
    
    @GetMapping("/getBookingLimitScById")
    public int getBookingLimitScById(@RequestParam("scid") int scid)
    {
        return scserv.getBookingLimitScById(scid);
    }
    
    
    @PostMapping("/registerservicecenter")
    public ServiceCenter save(@RequestBody ServiceCenterRegistration servicecenter)
    {
        Role role=roleserv.getRole(2);
        int questionid=(int)servicecenter.getQuestionid();
        
        Brand brand=brandserv.getById(servicecenter.getBrandid());
        
        // Removed the salt and encryption
        String password = servicecenter.getPassword();
        
        Login login =new Login(servicecenter.getUserid(), password, servicecenter.getAnswer(), false, role, questionid);
        Login saved=logserv.save(login);
        
        Area area=areaserv.getArea(servicecenter.getAreaid());
        
        ServiceCenter sc=new ServiceCenter(servicecenter.getScname(),servicecenter.getEmailid(),servicecenter.getContactno(),servicecenter.getLane(),servicecenter.getBookinglimit(),saved,brand,area);
        return scserv.save(sc);
    }
}
