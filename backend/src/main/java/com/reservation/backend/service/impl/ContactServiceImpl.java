package com.reservation.backend.service.impl;

import com.reservation.backend.model.Contact;
import com.reservation.backend.repository.ContactRepository;
import com.reservation.backend.service.api.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository repository;

    @Autowired
    private Optional<Contact> contact;

    @Override
    public List<Contact> findAll( )  {
        return repository.findAll();
    }

    @Override
    public Contact findById(Integer id) {
        contact = repository.findById(id);
        if (contact.isPresent()) {
            return contact.get();
        }
        return null;
    }

    @Override
    public Contact findByName(String name) {
        contact = repository.findByName(name).stream().findFirst();
        if (contact.isPresent()) {
            return contact.get();
        }
        return null;
    }

    @Override
    public Contact save(Contact contact) { return repository.save(contact); }
}
