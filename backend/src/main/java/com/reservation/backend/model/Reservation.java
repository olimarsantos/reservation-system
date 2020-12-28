package com.reservation.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@Table(name = "RESERVATION")
public class Reservation implements Serializable {
    private static final long serialVersionID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private Integer rating;

    @Column
    private Boolean favorite;

    @Column(columnDefinition="text")
    private String text;

    @OneToOne
    @NonNull
    private Contact contact;

    public Reservation(String name, String description, String text, Boolean favorite, Integer rating, Contact contact) {
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.favorite = favorite;
        this.text = text;
        this.contact = contact;
    }
}
