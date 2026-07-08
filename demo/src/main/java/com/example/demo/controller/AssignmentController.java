package com.example.demo.controller;

import com.example.demo.entity.ContractorAssignment;
import com.example.demo.service.AssignmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assignments")
@RequiredArgsConstructor
public class AssignmentController {

    private final AssignmentService service;

    @PostMapping
    public ContractorAssignment create(@RequestBody ContractorAssignment assignment) {
        return service.save(assignment);
    }

    @GetMapping
    public List<ContractorAssignment> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ContractorAssignment getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public ContractorAssignment update(
            @PathVariable Long id,
            @RequestBody ContractorAssignment assignment) {

        return service.update(id, assignment);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        service.delete(id);

        return "Assignment deleted successfully";
    }
}