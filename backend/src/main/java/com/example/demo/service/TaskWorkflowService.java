package com.example.demo.service;

import com.example.demo.dto.TaskRequestDto;
import com.example.demo.entity.ConstructionTask;
import com.example.demo.entity.ProjectInquiry;
import com.example.demo.entity.enums.TaskStatus;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.ConstructionTaskRepository;
import com.example.demo.repository.ProjectInquiryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskWorkflowService {

    private final ConstructionTaskRepository repository;

    private final ProjectInquiryRepository inquiryRepository;

    public ConstructionTask save(TaskRequestDto request) {

        ProjectInquiry project =
                inquiryRepository.findById(request.getProjectId())
                        .orElseThrow(() ->
                                new ResourceNotFoundException("Project not found"));

        ConstructionTask task = ConstructionTask.builder()
                .project(project)
                .title(request.getTitle())
                .description(request.getDescription())
                .priority(request.getPriority())
                .status(request.getStatus())
                .estimatedCost(request.getEstimatedCost())
                .build();

        return repository.save(task);

    }

    public List<ConstructionTask> getAll() {

        return repository.findAll();

    }

    public ConstructionTask getById(Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Task not found"));

    }

    public ConstructionTask update(Long id, ConstructionTask task) {

        ConstructionTask existing = getById(id);

        existing.setTitle(task.getTitle());
        existing.setDescription(task.getDescription());
        existing.setPriority(task.getPriority());
        existing.setStatus(task.getStatus());
        existing.setEstimatedCost(task.getEstimatedCost());

        return repository.save(existing);

    }

    public void delete(Long id) {

        repository.deleteById(id);

    }

    public List<ConstructionTask> getByProject(ProjectInquiry project) {

        return repository.findByProject(project);

    }

    public List<ConstructionTask> getByStatus(TaskStatus status) {

        return repository.findByStatus(status);

    }

    public List<ConstructionTask> getByProjectAndStatus(
            ProjectInquiry project,
            TaskStatus status) {

        return repository.findByProjectAndStatus(project, status);

    }

    public ConstructionTask updateTaskStatus(
            Long taskId,
            TaskStatus status) {

        ConstructionTask task = getById(taskId);

        task.setStatus(status);

        return repository.save(task);

    }
}