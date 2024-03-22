package com.example.RestAPI.repository;

import com.example.RestAPI.model.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<UserEntity, String> {
    // Métodos de CRUD já estão disponíveis
    //findAll, findById, save, deleteById

    // Utilizando consultas personalizadas
    List<UserEntity> findByNome(String nome);
    List<UserEntity> findByEmail(String email);

    // Consulta personalizada para encontrar usuários pelo nome e email
    @Query("{ 'nome' : ?0, 'email' : ?1 }")
    List<UserEntity> findByNomeAndEmail(String nome, String email);

    // Consulta personalizada para encontrar usuários pelo nome que começa com um determinado prefixo
    @Query("{ 'nome' : { $regex : ?0, $options: 'i' } }")
    List<UserEntity> findByNomeStartingWithIgnoreCase(String prefix);

    // Consulta personalizada para encontrar usuários pelo nome que contenham uma determinada string
    @Query("{ 'nome' : { $regex : ?0, $options: 'i' } }")
    List<UserEntity> findByNomeContainingIgnoreCase(String substring);
}
