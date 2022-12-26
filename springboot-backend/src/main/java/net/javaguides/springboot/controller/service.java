package net.javaguides.springboot.controller;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.model.Reservation;
import net.javaguides.springboot.repository.EmployeeRepository;
import net.javaguides.springboot.repository.LouerCarRepository;
import net.javaguides.springboot.repository.ReserveRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("userService")
@Transactional
public class service {
@Autowired
private EmployeeRepository client;
public List<Employee> getUser(String gmail , String password){
    return client.getUserByUsername(gmail , password);
}
    public int deletUser(String gmail){
        return client.deleteByName(gmail);
    }

    @Autowired
    private ReserveRepositry reservation;
    
    public int deleresrevation(String mail){
        return reservation.deletereservation(mail);
    }


    public List<Reservation> getListeResevation(String mail)
    {
        return reservation.getReservationByMail(mail);
    }


    public void updetResevation(String date , String mail)
    {
         reservation.update(date, mail);
    }



}
