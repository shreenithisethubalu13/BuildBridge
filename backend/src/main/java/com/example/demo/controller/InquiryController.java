package com.example.demo.controller;

import com.example.demo.dto.AssignContractorDto;
import com.example.demo.dto.InquiryRequestDto;
import com.example.demo.entity.ProjectInquiry;
import com.example.demo.entity.SystemUser;
import com.example.demo.entity.enums.InquiryStatus;
import com.example.demo.service.InquiryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/inquiries")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class InquiryController {

    private final InquiryService inquiryService;

    // Create Inquiry
    @PostMapping
    public ProjectInquiry create(@RequestBody InquiryRequestDto request) {
        return inquiryService.save(request);
    }

    // Get All Inquiries
    @GetMapping
    public List<ProjectInquiry> getAll() {
        return inquiryService.getAll();
    }

    // Get Inquiry By ID
    @GetMapping("/{id}")
    public ProjectInquiry getById(@PathVariable Long id) {
        return inquiryService.getById(id);
    }

    // Update Inquiry
    @PutMapping("/{id}")
    public ProjectInquiry update(
            @PathVariable Long id,
            @RequestBody ProjectInquiry inquiry) {

        return inquiryService.update(id, inquiry);
    }

    // Delete Inquiry
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        inquiryService.delete(id);

        return "Project Deleted Successfully";
    }

    // Client Projects
    @GetMapping("/my/{username}")
    public List<ProjectInquiry> myProjects(
            @PathVariable String username) {

        return inquiryService.getMyProjects(username);
    }

    // Get Contractors
    @GetMapping("/contractors")
    public List<SystemUser> contractors() {

        return inquiryService.getAllContractors();
    }

    // Assign Contractor
    @PutMapping("/{id}/assign")
    public ProjectInquiry assignContractor(

            @PathVariable Long id,

            @RequestBody AssignContractorDto dto) {

        return inquiryService.assignContractor(
                id,
                dto.getContractorId()
        );
    }

    // Update Status
    @PutMapping("/{id}/status")
    public ProjectInquiry updateStatus(

            @PathVariable Long id,

            @RequestParam InquiryStatus status) {

        return inquiryService.updateStatus(id, status);
    }

    // Dashboard Statistics
    @GetMapping("/dashboard")
    public Map<String, Long> dashboard() {

        Map<String, Long> stats = new HashMap<>();

        stats.put("totalProjects", inquiryService.totalProjects());
        stats.put("pendingProjects", inquiryService.pendingProjects());
        stats.put("assignedProjects", inquiryService.assignedProjects());
        stats.put("completedProjects", inquiryService.completedProjects());

        return stats;
    }

}