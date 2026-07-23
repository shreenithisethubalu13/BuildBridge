package com.example.demo.dto;

import com.example.demo.entity.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponseDto {

    private Long id;
    private String token;
    private String username;
    private Role role;

}