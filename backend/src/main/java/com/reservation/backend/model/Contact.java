package com.reservation.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "CONTACT")
public class Contact {
    private static final long serialVersionID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @Column
    private String type;



    public Contact(String name, String type, String phone, String birthDate) {
        this.name = name;
        this.type = type;
        this.phone = phone;
        this.birthDate = birthDate;
    }

    @Column
    private String phone;

    @Column
    private String birthDate;
}
