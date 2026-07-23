package com.example.demo.service;

import com.example.demo.entity.SystemUser;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.SystemUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class userService {

    private final SystemUserRepository userRepository;

    // Get all users
    public List<SystemUser> getAllUsers() {
        return userRepository.findAll();
    }

    // Get one user
    public SystemUser getUser(Long id) {

        return userRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

    }

    // Delete user
    public void deleteUser(Long id) {

        if (!userRepository.existsById(id)) {
            throw new ResourceNotFoundException("User not found");
        }

        userRepository.deleteById(id);

    }

}