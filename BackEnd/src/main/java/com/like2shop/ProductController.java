package com.like2shop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins ={"http://localhost:5173","https://like2shop-sharfan.netlify.app"})
public class ProductController {

    @Autowired
    private  ProductRepository productRepository;
        @GetMapping("/getList")
        public Page<ProductModel> getList(@RequestParam(defaultValue = "0") int page,
                                          @RequestParam(defaultValue = "5") int size,
                                          @RequestParam(defaultValue = "name") String sortBy,
                                          @RequestParam(defaultValue = "asc") String sortDir)
        {
            try {
                Sort.Direction direction = Sort.Direction.fromString(sortDir);
                Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));
                Page<ProductModel> responses = productRepository.findAll(pageable);
                System.out.println("pro List responses: " + responses.getContent());
                return responses;
            } catch (Exception e) {
                return Page.empty();
            }
        }
    @PreAuthorize("hasRole('SELLER')")
    @PostMapping("/addProduct")
    public Map<String,String> addProduct(@RequestBody ProductModel dto){
            System.out.println("Reached add product Controller"+dto);
        productRepository.save(dto);
      return Map.of("message","Product added successfully");


    }



}
