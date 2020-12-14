package com.reservation.backend.service.api;

import com.reservation.backend.model.Book;

import java.util.List;

public interface BookService {

    List<Book> findAll();

    Book findById(Integer id);

    Book save(Book book);
}
