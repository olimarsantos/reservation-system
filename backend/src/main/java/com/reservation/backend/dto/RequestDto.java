package com.reservation.backend.dto;

import lombok.Data;

@Data
public class RequestDto {
    private Integer id;
    private String contactName;
    private String contactType;
    private String phone;
    private String birthDate;
    private String text;
}
