package com.example.demo.controller;

import com.example.demo.entity.SystemUser;
import com.example.demo.service.userService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class userController {

    private final userService userService;

    // Get all users
    @GetMapping
    public List<SystemUser> getAllUsers() {
        return userService.getAllUsers();
    }

    // Get user by ID
    @GetMapping("/{id}")
    public SystemUser getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    // Delete user
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {

        userService.deleteUser(id);

        return "User Deleted Successfully";
    }

}