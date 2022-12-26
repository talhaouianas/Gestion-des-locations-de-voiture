package net.javaguides.springboot.model;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;
import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "reserv")
@Table(name = "reserv")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;
    @Column(name = "prenom")
    private String prenom;
    @Column(name = "mail")
    private String mail;
    @Column(name = "tl")
    private String tl;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "adress")
    private String adress;
    @Column(name = "age")
    private String age;
    @Column(name = "jours")
    private String jours ;
    @Column(name = "date")
    private String date;


    public Reservation(String name , String prenom , String mail , String tl , String nombre , String adress , String age  , String jours , String date ){
        this.name = name;
        this.prenom = prenom ;
        this.mail=mail;
        this.tl= tl ;
        this.nombre = nombre ;
        this.adress= adress;
        this.age=age;
        this.jours=jours;
        this.date=date;

    }



}
