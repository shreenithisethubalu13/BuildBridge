package com.example.demo.controller;

import com.example.demo.dto.InquiryRequestDto;
import com.example.demo.entity.ProjectInquiry;
import com.example.demo.service.InquiryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inquiries")
@RequiredArgsConstructor
public class InquiryController {

    private final InquiryService inquiryService;

    @PostMapping
    public ProjectInquiry create(@RequestBody InquiryRequestDto request) {
        return inquiryService.save(request);
    }

    @GetMapping
    public List<ProjectInquiry> getAll() {
        return inquiryService.getAll();
    }

    @GetMapping("/{id}")
    public ProjectInquiry getById(@PathVariable Long id) {
        return inquiryService.getById(id);
    }

    @PutMapping("/{id}")
    public ProjectInquiry update(
            @PathVariable Long id,
            @RequestBody ProjectInquiry inquiry) {

        return inquiryService.update(id, inquiry);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        inquiryService.delete(id);

        return "Project Inquiry Deleted Successfully";
    }
}