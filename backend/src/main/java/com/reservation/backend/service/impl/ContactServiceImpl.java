package com.reservation.backend.service.impl;

import com.reservation.backend.model.Contact;
import com.reservation.backend.repository.ContactRepository;
import com.reservation.backend.service.api.ContactService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService {

    private final ContactRepository repository;

    private Optional<Contact> contact;

    public ContactServiceImpl(ContactRepository repository, Optional<Contact> contact) {
        this.repository = repository;
        this.contact = contact;
    }

    @Override
    public List<Contact> findAll( )  {
        return repository.findAll();
    }

    @Override
    public Contact findById(Integer id) {
        contact = repository.findById(id);
        return contact.orElse(null);
    }

    @Override
    public Contact save(Contact contact) { return repository.save(contact); }

    @Override
    public void deleteById(Integer id) { repository.deleteById(id); }
}
