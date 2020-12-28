package com.reservation.backend.service.api;

import com.reservation.backend.model.ContactType;

import java.util.List;

public interface ContactTypeService {

    List<ContactType> findAll();

    ContactType findByType(String type);
}
