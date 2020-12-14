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

    @OneToOne
    @NonNull
    private Contact contact;
}
