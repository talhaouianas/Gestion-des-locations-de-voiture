package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.model.LouerCar;
import net.javaguides.springboot.model.Reservation;
import net.javaguides.springboot.model.car;
import net.javaguides.springboot.repository.CarRepository;
import net.javaguides.springboot.repository.EmployeeRepository;
import net.javaguides.springboot.repository.LouerCarRepository;
import net.javaguides.springboot.repository.ReserveRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class EmployeeController {

	
	@Autowired
	private LouerCarRepository louerCarRepository ;
	    
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ReserveRepositry reserveRepositry;

    @Autowired
    private CarRepository carRepository ;
    
  
    // Add a louercar
    @PostMapping("/louerCar")
    public LouerCar addlouercar(@RequestBody LouerCar louercar) {
        return louerCarRepository.save(louercar) ;
    }
    
    
// affiche all reservation
    @GetMapping("/reservation")
    public List<Reservation> getAllReservation(){
        return reserveRepositry.findAll();
    }

// affiche liste des clients
    @GetMapping("/users")
     public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    // build create employee REST API
    @PostMapping("/signup")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // Add a reservation
    @PostMapping("/reserve")
    public Reservation addReservation(@RequestBody Reservation resrve) {
        return reserveRepositry.save(resrve) ;
    }

    // Delete a user
    @DeleteMapping("/user{id}")
    String deleteUser(@PathVariable Long id){
        employeeRepository.deleteById(id);
        return "User with id="+id+" has been Deleted !!!" ;
    }

    // Delete a Car
    @DeleteMapping("/car{id}")
    String deleteCar(@PathVariable Long id){
        carRepository.deleteById(id);
        return "Car with Id:"+id+"Has Been Deleted !!!" ;
    }
    // Add a car
    @PostMapping("/addCar")
    public car addCar(@RequestBody car oneCar){
        return carRepository.save(oneCar) ;
    }

    // Get all Cars
    @GetMapping("/cars")
    public List<car> getAllcars(){
        return carRepository.findAll();
    }



    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable  long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + id));
        return ResponseEntity.ok(employee);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails) {
        Employee updateEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        updateEmployee.setName(employeeDetails.getName());
        updateEmployee.setGmail(employeeDetails.getGmail());
        updateEmployee.setPassword(employeeDetails.getPassword());
        updateEmployee.setReservation(employeeDetails.getReservation());

        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));
        employeeRepository.delete(employee);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

// authentification
    @Autowired
    private service cl;
    @GetMapping("/cl/{gmail}/{password}")
    public ResponseEntity<List<Employee>> getUser(@PathVariable("gmail") String gmail , @PathVariable("password") String password)
    {
        return new ResponseEntity<>(cl.getUser(gmail , password) , HttpStatus.OK);
    }
//  suprimer client par gmail
//    @DeleteMapping("/cl/{gmail}")
//    public ResponseEntity<Integer> deletUser(@PathVariable("gmail") String gmail)
//    {
//        return new ResponseEntity<>(cl.deletUser(gmail) , HttpStatus.OK);
//    }


// suprimer resrevation par gmail
@DeleteMapping("/reser/{mail}")
public ResponseEntity<Integer> deletResrv(@PathVariable("mail") String mail)
{
    return new ResponseEntity<>(cl.deleresrevation(mail) , HttpStatus.OK);
}

//suprimer client par gmail
//@DeleteMapping("/cl/{gmail}")
//public ResponseEntity<Integer> deletUser(@PathVariable("gmail") String gmail)
//{
//  return new ResponseEntity<>(cl.deletUser(gmail) , HttpStatus.OK);
//}

// cherche sur client par gmail
@GetMapping("/listeRes/{mail}")
public ResponseEntity<List<Reservation>> getUser(@PathVariable("mail") String mail)
{
    return new ResponseEntity<>(cl.getListeResevation(mail) , HttpStatus.OK);
}


// modifier la date de resrevation
    @PutMapping("/updateReserv/{date}/{mail}")
    public void updateReserv(@PathVariable("date") String date , @PathVariable("mail") String mail )
    {
        cl.updetResevation(date , mail);
    }



    // add client
    @PostMapping("/addClient/{name}/{gmail}/{password}/{reservation}") //
    public Employee createClient(@PathVariable("name") String name , @PathVariable("gmail") String gmail ,  @PathVariable("password") String password ,@PathVariable("reservation") int reservation) {
        Employee ep = new Employee(name , gmail , password , reservation);
        return employeeRepository.save(ep);
    }
}
