package com.example.demo.dto;

import com.example.demo.entity.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDto {

    private String username;
    private String email;
    private String password;
    private Role role;
    private String fullName;

}