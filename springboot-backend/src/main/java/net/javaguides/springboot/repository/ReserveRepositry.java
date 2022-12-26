package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.model.Reservation;
import org.springframework.data.jpa.repository.*;

import java.util.List;
import net.javaguides.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;




public interface ReserveRepositry extends JpaRepository<Reservation, Long> {
    @Modifying
    @Query("DELETE FROM reserv u WHERE u.mail = ?1") //
    int deletereservation(String mail);

    @Query("SELECT u FROM reserv u WHERE u.mail = ?1")
    public List<Reservation> getReservationByMail(String mail);

    //////// modifier la date de reservation

    @Modifying
    @Transactional
    @Query("UPDATE reserv u SET   u.date = ?1  WHERE u.mail = ?2")
    void update(String date , String mail);
}