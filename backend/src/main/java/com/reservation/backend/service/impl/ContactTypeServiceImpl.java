package com.reservation.backend.service.impl;

import com.reservation.backend.model.ContactType;
import com.reservation.backend.repository.ContactTypeRepository;
import com.reservation.backend.service.api.ContactTypeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactTypeServiceImpl implements ContactTypeService {

    private final ContactTypeRepository repository;

    private Optional<ContactType> contactType;

    public ContactTypeServiceImpl(ContactTypeRepository repository, Optional<ContactType> contactType) {
        this.repository = repository;
        this.contactType = contactType;
    }

    @Override
    public List<ContactType> findAll() {
        return repository.findAll();
    }

    @Override
    public ContactType findByType(String type) {
        contactType = repository.findByType(type).stream().findFirst();
        return contactType.orElse(null);
    }

    @Override
    public ContactType save(ContactType contactType) {
        return repository.save(contactType);
    }
}
