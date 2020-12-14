package com.reservation.backend.service.impl;

import com.reservation.backend.model.Book;
import com.reservation.backend.repository.BookRepository;
import com.reservation.backend.service.api.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository repository;

    @Autowired
    private Optional<Book> book;

    @Override
    public List<Book> findAll() {
        return repository.findAll();
    }

    @Override
    public Book findById(Integer id) {
        book = repository.findById(id);

        if (book.isPresent()) {
            return book.get();
        }
        throw new EntityNotFoundException("NOT FOUND");
    }

    @Override
    public Book save(Book book) {
        return repository.save(book);
    }
}
