package net.javaguides.springboot.repository;

import org.springframework.stereotype.Repository;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.model.LouerCar;
import net.javaguides.springboot.model.Reservation;
import org.springframework.data.jpa.repository.*;

import java.util.List;
import net.javaguides.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface LouerCarRepository extends JpaRepository<LouerCar, Long> {

	  List<LouerCar> addlouercar();
	}
