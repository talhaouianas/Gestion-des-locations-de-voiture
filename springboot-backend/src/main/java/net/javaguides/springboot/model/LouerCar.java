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
@Entity(name = "LouerCar")
@Table(name = "LouerCar")
public class LouerCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_louercar;

    @Column(name = "Prenom_loueur")
    private String Prenom_loueur;

    @Column(name = "email")
    private String email;

    @Column(name = "designation_voiture")
    private String designation_voiture;

    @Column(name = "ville")
    private String ville;

    @Column(name = "prix")
    private String prix;

    @Column(name = "photo_voiture")
    private String photo_voiture;

	public LouerCar(String prenom_loueur, String email, String designation_voiture, String ville, String prix,
			String photo_voiture) {
		
		Prenom_loueur = prenom_loueur;
		this.email = email;
		this.designation_voiture = designation_voiture;
		this.ville = ville;
		this.prix = prix;
		this.photo_voiture = photo_voiture;
	}







}
