package com.candelaria.backend.cartapp.backend_cartapp.repositories;
import com.candelaria.backend.cartapp.backend_cartapp.models.entities.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {


}
