package com.example.demo.controller;

import com.example.demo.dto.AuthRequestDto;
import com.example.demo.dto.AuthResponseDto;
import com.example.demo.dto.RegisterDto;
import com.example.demo.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public AuthResponseDto register(@RequestBody RegisterDto request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponseDto login(@RequestBody AuthRequestDto request) {
        return authService.login(request);
    }
}