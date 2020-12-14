package com.reservation.backend.service.api;

import com.reservation.backend.model.Reservation;

import java.util.List;

public interface ReservationService {

    List<Reservation> findAll();

    Reservation findById(Integer id);

    Reservation save(Reservation reservation);
}
