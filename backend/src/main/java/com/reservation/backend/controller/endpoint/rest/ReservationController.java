package com.reservation.backend.controller.endpoint.rest;

import com.reservation.backend.dto.ContactDto;
import com.reservation.backend.dto.ReservationDto;
import com.reservation.backend.model.Contact;
import com.reservation.backend.model.ContactType;
import com.reservation.backend.model.Reservation;
import com.reservation.backend.service.api.ContactService;
import com.reservation.backend.service.api.ContactTypeService;
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
@RequestMapping("v1/public")
public class ReservationController {

    private ReservationService reservationService;

    private ContactService contactService;

    private ContactTypeService contactTypeService;

    @Autowired
    public ReservationController(ReservationService reservationService, ContactService contactService, ContactTypeService contactTypeService) {
        this.reservationService = reservationService;
        this.contactService = contactService;
        this.contactTypeService = contactTypeService;
    }

    @ApiOperation(value = "Fetches lists of contacts.",
            notes = "Fetches lists of contacts.")
    @CrossOrigin(origins = CORS_URL)
    @GetMapping("/contacts")
    public ResponseEntity<List<ContactDto>> getContacts() {
        List<Contact> contact = contactService.findAll();
        if (contact != null) {
            return new ResponseEntity<>(ContactDto.toContactListDto(contact), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @ApiOperation(value = "Fetches a single contact by id.",
            notes = "Fetches a single contact by id.")
    @CrossOrigin(origins = CORS_URL)
    @GetMapping("/contacts/{id}")
    public ResponseEntity<ContactDto> getContactById(@PathVariable Integer id) {
        Contact contact = contactService.findById(id);
        if (contact != null) {
            return new ResponseEntity<>(ContactDto.toContactDto(contact), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @ApiOperation(value = "Create a new contact.",
            notes = "Create a new contact.")
    @CrossOrigin(origins = CORS_URL)
    @PostMapping("/contacts")
    public ResponseEntity<Contact> createContact(@RequestBody ContactDto request) {
        ContactType contactType = contactTypeService.findByType(request.getContactType());
        if (contactType != null) {
            Contact contact = contactService.save(ContactDto.toContact(request, contactType));
            return new ResponseEntity<>(contact, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @ApiOperation(value = "This method alter a contact.",
            notes = "This method alter a contact.")
    @CrossOrigin(origins = CORS_URL)
    @PutMapping("/contacts/{contactId}")
    public ResponseEntity<ContactDto> alterContact(@RequestBody ContactDto request, @PathVariable int contactId) {
        Contact contact = contactService.findById(contactId);
        ContactType contactType = contactTypeService.findByType(request.getContactType());

        if (contact != null && contactType != null) {
            contact.setContactName(request.getContactName());
            contact.setContactType(contactType);
            contact.setPhone(request.getPhone());
            contact.setBirthDate(request.getBirthDate());
            return new ResponseEntity<>(ContactDto.toContactDto(contactService.save(contact)), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @ApiOperation(value = "Delete a contact.",
            notes = "Delete a contact.")
    @CrossOrigin(origins = CORS_URL)
    @DeleteMapping("/contacts/{contactId}")
    public ResponseEntity<Contact> deleteContact(@PathVariable Integer contactId) {
        Contact contact = contactService.findById(contactId);

        if (contact != null) {
            contactService.deleteById(contactId);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @ApiOperation(value = "Fetches lists of contact types.",
            notes = "Fetches lists of contact types.")
    @CrossOrigin(origins = CORS_URL)
    @GetMapping("/contact-type")
    public ResponseEntity<List<ContactType>> getContactTypes() {
        return new ResponseEntity<>(contactTypeService.findAll(), HttpStatus.OK);
    }

    @ApiOperation(value = "Fetches a single contact types by type.",
            notes = "Fetches a single contact types by type.")
    @CrossOrigin(origins = CORS_URL)
    @GetMapping("/contact-type/{type}")
    public ResponseEntity<ContactType> getContactTypeByName(@PathVariable String type) {
        return new ResponseEntity<>(contactTypeService.findByType(type), HttpStatus.OK);
    }

    @ApiOperation(value = "Fetches lists of reservations.",
            notes = "Fetches lists of reservations.")
    @CrossOrigin(origins = CORS_URL)
    @GetMapping("/reservations")
    public ResponseEntity<List<ReservationDto>> getReservations() {
        List<Reservation> reservations = reservationService.findAll();
        return new ResponseEntity<>(ReservationDto.toReservationListDto(reservations), HttpStatus.OK);
    }

    @ApiOperation(value = "This method fetches a single reservations.",
            notes = "This method fetches a single reservations.")
    @CrossOrigin(origins = CORS_URL)
    @GetMapping("/reservations/{reservationId}")
    public ResponseEntity<ReservationDto> getReservationById(@PathVariable int reservationId) {
        Reservation reservation = reservationService.findById(reservationId);
        return new ResponseEntity<>(ReservationDto.toReservationDto(reservation), HttpStatus.OK);
    }

    @ApiOperation(value = "This method create a reservation.",
            notes = "This method create a reservation.")
    @CrossOrigin(origins = CORS_URL)
    @PostMapping("/reservations")
    public ResponseEntity<ReservationDto> createReservation(@RequestBody ReservationDto request) {
        Contact contact = contactService.findById(request.getContactId());
        if (contact != null) {
            Reservation reservation = reservationService.save(ReservationDto.toReservation(request, contact));
            if (reservation != null) {
                return new ResponseEntity<>(ReservationDto.toReservationDto(reservation), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @ApiOperation(value = "This method alter a reservation.",
            notes = "This method alter a reservation.")
    @CrossOrigin(origins = CORS_URL)
    @PutMapping("/reservations/{reservationId}")
    public ResponseEntity<ReservationDto> alterReservation(@RequestBody ReservationDto request, @PathVariable int reservationId) {
        Reservation reservation = reservationService.findById(reservationId);
        Contact contact = contactService.findById(request.getContactId());
        if (reservation != null && contact != null) {
            reservation.setRating(request.getRating());
            reservation.setName(request.getName());
            reservation.setDescription(request.getDescription());
            reservation.setText(request.getText());
            reservation.setContact(contact);
            return new ResponseEntity<>(ReservationDto.toReservationDto(reservationService.save(reservation)), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
