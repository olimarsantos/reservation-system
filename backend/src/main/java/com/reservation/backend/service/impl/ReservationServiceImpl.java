package com.reservation.backend.service.impl;

import com.reservation.backend.model.Reservation;
import com.reservation.backend.repository.ReservationRepository;
import com.reservation.backend.service.api.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepository repository;

    @Autowired
    private Optional<Reservation> reservation;

    @Override
    public List<Reservation> findAll() { return repository.findAll(); }

    @Override
    public Reservation findById(Integer id) {
        reservation = repository.findById(id);
        if (reservation.isPresent()) {
            return reservation.get();
        }
        throw new EntityNotFoundException("NOT FOUND");
    }

    @Override
    public Reservation save(Reservation reservation) {
        return repository.save(reservation);
    }
}
