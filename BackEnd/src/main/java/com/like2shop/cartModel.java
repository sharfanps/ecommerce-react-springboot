package com.like2shop;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class cartModel {
    @Entity
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Table(name="cart")
    public class CartModel {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;

        @ManyToOne
        @JoinColumn(name = "user_id", nullable = false)
        private signInModel user;

        @ManyToOne
        @JoinColumn(name = "product_id", nullable = false)
        private ProductModel product;

        private int quantity;




    }
}
