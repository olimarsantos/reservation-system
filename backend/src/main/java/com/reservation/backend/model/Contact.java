package com.reservation.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

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
    private String contactName;

    public Contact(String contactName, String phone, String birthDate, ContactType contactType) {
        this.contactName = contactName;
        this.phone = phone;
        this.birthDate = birthDate;
        this.contactType = contactType;
    }

    @Column
    private String phone;

    @Column
    private String birthDate;

    @OneToOne
    @NonNull
    private ContactType contactType;
}
