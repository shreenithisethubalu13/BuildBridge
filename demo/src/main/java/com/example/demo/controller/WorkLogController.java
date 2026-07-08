package com.example.demo.controller;

import com.example.demo.entity.DailyWorkLog;
import com.example.demo.service.LogReportingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/logs")
@RequiredArgsConstructor
public class WorkLogController {

    private final LogReportingService service;

    @PostMapping
    public DailyWorkLog create(@RequestBody DailyWorkLog log) {
        return service.save(log);
    }

    @GetMapping
    public List<DailyWorkLog> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public DailyWorkLog getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public DailyWorkLog update(
            @PathVariable Long id,
            @RequestBody DailyWorkLog log) {

        return service.update(id, log);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        service.delete(id);

        return "Work Log deleted successfully";
    }
}