 package com.example.demo.repositories;

import java.util.Optional;


import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
@Transactional
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	@Query("select c from Customer c where loginid=:loginid")
	public Optional<Customer> getByLoginid(String loginid);
}
