package com.reservation.backend.dto;

import com.reservation.backend.model.Contact;
import com.reservation.backend.model.ContactType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class ContactDto {
    private final Integer id;
    private final String contactName;
    private final String contactType;
    private final String phone;
    private final String birthDate;

    public static List<ContactDto> toContactListDto(List<Contact> contactList) {
        List<ContactDto> ContactListDto = new ArrayList<>();

        for (Contact contact : contactList) {
            ContactListDto.add(new ContactDto(contact.getId(), contact.getContactName(), contact.getContactType().getType(),
                    contact.getPhone(), contact.getBirthDate()));
        }
        return ContactListDto;
    }

    public static ContactDto toContactDto(Contact contact) {
        return new ContactDto(contact.getId(), contact.getContactName(), contact.getContactType().getType(),
                contact.getPhone(), contact.getBirthDate());
    }

    public static Contact toContact(ContactDto contactDto, ContactType contactType) {
        return new Contact(contactDto.getContactName(), contactDto.getPhone(), contactDto.getBirthDate(), contactType);
    }
}
