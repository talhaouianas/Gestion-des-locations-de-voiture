package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Modifying;
import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // all crud database methods
//@Query(value = "select ud from user ud where ud.gmail=?1 and ud.password=?2")
  //  public List<Employee> getUser(String gmail , String password);

    @Query("SELECT u FROM user u WHERE u.gmail = ?1 and u.password = ?2")
    public List<Employee> getUserByUsername(String gmail , String password );


    @Modifying
    @Query(value = "DELETE FROM user u WHERE u.gmail = ?1") //
    int deleteByName(String gmail);

}



