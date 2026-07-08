package com.example.demo.controller;

import com.example.demo.entity.ProjectInquiry;
import com.example.demo.service.ContractorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contractor")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ContractorController {

    private final ContractorService contractorService;

    @GetMapping("/{username}/projects")
    public List<ProjectInquiry> getAssignedProjects(
            @PathVariable String username) {

        return contractorService.getAssignedProjects(username);
    }

}