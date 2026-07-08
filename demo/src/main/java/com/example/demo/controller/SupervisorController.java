package com.example.demo.controller;

import com.example.demo.entity.ProjectInquiry;
import com.example.demo.entity.enums.InquiryStatus;
import com.example.demo.service.SupervisorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/supervisor")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class SupervisorController {

    private final SupervisorService supervisorService;

    // Get all projects
    @GetMapping("/projects")
    public List<ProjectInquiry> getProjects() {

        return supervisorService.getProjects();

    }

    // Update Project Status
    @PutMapping("/{id}/status")
    public ProjectInquiry updateStatus(

            @PathVariable Long id,

            @RequestParam InquiryStatus status) {

        return supervisorService.updateStatus(id, status);

    }

}