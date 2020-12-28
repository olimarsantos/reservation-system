package com.reservation.backend.dto;

import com.reservation.backend.model.Contact;
import com.reservation.backend.model.Reservation;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class ReservationDto {
    private final Integer id;
    private final String name;
    private final Integer rating;
    private final String description;
    private final Boolean favorite;
    private final Integer contactId;
    private final String text;

    public static List<ReservationDto> toReservationListDto(List<Reservation> reservationList) {
        List<ReservationDto> ReservationDto = new ArrayList<>();

        for (Reservation reservation : reservationList) {
            ReservationDto.add(new ReservationDto(reservation.getId(), reservation.getName(), reservation.getRating(),
                    reservation.getDescription(), reservation.getFavorite(), reservation.getContact().getId(), reservation.getText()));
        }
        return ReservationDto;
    }

    public static ReservationDto toReservationDto(Reservation reservation) {
        return new ReservationDto(reservation.getId(), reservation.getName(), reservation.getRating(),
                reservation.getDescription(), reservation.getFavorite(), reservation.getContact().getId(), reservation.getText());
    }

    public static Reservation toReservation(ReservationDto reservationDto, Contact contact) {
        return new Reservation(reservationDto.getName(), reservationDto.getDescription(), reservationDto.getText(), reservationDto.getFavorite(),
                reservationDto.getRating(), contact);
    }
}
