package com.reservation.backend.service.api;

import com.reservation.backend.model.Contact;

import java.util.List;

public interface ContactService {

    List<Contact> findAll();

    Contact findById(Integer id);

    Contact save(Contact contact);

    void deleteById(Integer id);
}
