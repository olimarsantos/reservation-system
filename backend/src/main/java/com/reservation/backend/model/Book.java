package com.reservation.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "BOOK")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String text;

    @OneToOne
    @NonNull
    private Contact contact;

    public Book(String text, Contact contact) {
        this.text = text;
        this.contact = contact;
    }
}
