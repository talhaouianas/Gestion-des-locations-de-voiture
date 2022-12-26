package net.javaguides.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "cars")
@Table(name = "cars")
public class car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "namecar")
    private String namecar;

    @Column(name = "model")
    private String model;

    @Column(name = "matricule")
    private String matricule;

    @Column(name = "color")
    private String color;

    @Column(name = "forcecar")
    private String forcecar;

    @Column(name = "price")
    private String price;

    public car(String namecar, String model, String matricule, String color, String forcecar, String price) {
        this.namecar = namecar;
        this.model = model;
        this.matricule = matricule;
        this.color = color;
        this.forcecar = forcecar;
        this.price = price;
    }

}
