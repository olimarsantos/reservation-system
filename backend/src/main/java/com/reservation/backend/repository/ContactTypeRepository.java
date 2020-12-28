package com.reservation.backend.repository;

import com.reservation.backend.model.ContactType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactTypeRepository extends JpaRepository<ContactType, Integer> {

    List<ContactType> findByType(String type);

}
