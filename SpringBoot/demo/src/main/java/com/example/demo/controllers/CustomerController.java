package com.example.demo.controllers;

import java.io.IOException;
import java.util.List;
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
import com.example.demo.entities.Role;
import com.example.demo.services.AreaService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {
    @Autowired
    CustomerService custserv;
    @Autowired
    RoleService roleserv;
    @Autowired
    AreaService areaserv;
    @Autowired
    LoginService logserv;
    
    @GetMapping("/getCustomers")
    public List<Customer> getAll() {
        return custserv.getAll();
    }
    
    @GetMapping("/getCustomerdetails")
    public Customer getByLoginid(@RequestParam("loginid") String loginid) {
        return custserv.getByLoginid(loginid);
    }
    
    @PostMapping("/registercustomer")
    public Customer register(@RequestBody CustomerRegistration custreg) {
        System.out.print("Customer Registration");
        Role role=roleserv.getRole(1);
        int questionid=(int)custreg.getQuestionid();
  
        String password = custreg.getPassword();
        
        Login login =new Login(custreg.getUserid(), password, custreg.getAnswer(), true, role, questionid);
        Login saved=logserv.save(login);
        
        Area area=areaserv.getArea(custreg.getAreaid());
        Customer customer=new Customer(custreg.getFname(),custreg.getLname(),custreg.getBirthdate(),custreg.getEmailid(),custreg.getLane(),custreg.getContactno(),area,saved);
        
        return custserv.save(customer);
    }
}
