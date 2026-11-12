package com.like2shop.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.csrf.MissingCsrfTokenException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
//    @ExceptionHandler(MissingCsrfTokenException.class)
//    public ResponseEntity<?> handleTokenException(MissingCsrfTokenException e)
//    {
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//                .body("Token Expired");
//    }
//
}
