package com.example.demo.controller;

import com.example.demo.dto.TaskRequestDto;
import com.example.demo.entity.ConstructionTask;
import com.example.demo.service.TaskWorkflowService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskWorkflowService service;

    @PostMapping
    public ConstructionTask create(@RequestBody TaskRequestDto request) {

        return service.save(request);

    }

    @GetMapping
    public List<ConstructionTask> getAll() {

        return service.getAll();

    }

    @GetMapping("/{id}")
    public ConstructionTask getById(@PathVariable Long id) {

        return service.getById(id);

    }

    @PutMapping("/{id}")
    public ConstructionTask update(
            @PathVariable Long id,
            @RequestBody ConstructionTask task) {

        return service.update(id, task);

    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        service.delete(id);

        return "Task deleted successfully";

    }
}