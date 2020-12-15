package com.reservation.backend.controller.endpoint.rest;

import com.reservation.backend.dto.RequestDto;
import com.reservation.backend.model.Book;
import com.reservation.backend.model.Contact;
import com.reservation.backend.model.Reservation;
import com.reservation.backend.service.api.BookService;
import com.reservation.backend.service.api.ContactService;
import com.reservation.backend.service.api.ReservationService;
import io.swagger.annotations.ApiOperation;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.reservation.backend.service.util.Constants.CORS_URL;

@NoArgsConstructor
@RestController
@RequestMapping("v1/public/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private ContactService contactService;

    @Autowired
    private BookService bookService;

    @ApiOperation(value = "Fetches lists of reservations.",
            notes = "Fetches lists of reservations.")
    @CrossOrigin(origins = CORS_URL)
    @GetMapping
    public ResponseEntity<List<Reservation>> getReservations() {
        return new ResponseEntity<>(reservationService.findAll(), HttpStatus.OK);
    }

    @ApiOperation(value = "This method fetches a single reservations.",
            notes = "This method fetches a single reservations.")
    @CrossOrigin(origins = CORS_URL)
    @GetMapping("/{reservationId}")
    public ResponseEntity<List<Reservation>> getReservationById(@PathVariable int reservationId) {
        Reservation reservation = reservationService.findById(reservationId);
        return new ResponseEntity(reservation, HttpStatus.OK);
    }

    @ApiOperation(value = "This method create a reservations.",
            notes = "This method create a reservations.")
    @CrossOrigin(origins = CORS_URL)
    @PostMapping
    public ResponseEntity<RequestDto> reservation(@RequestBody RequestDto request) {
        if ((request.getContactName() != null) && (!request.getContactName().isEmpty())) {
            Contact contact = contactService.findByName(request.getContactName());
            if (contact != null) {
                Book book = new Book(request.getText(), contact);
                bookService.save(book);
            } else {
                Contact newContact = new Contact(request.getContactName(),
                        request.getContactType(),
                        request.getPhone(),
                        request.getBirthDate());
                contactService.save(newContact);
                Book book = new Book(request.getText(), newContact);
                bookService.save(book);
            }
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }
}
