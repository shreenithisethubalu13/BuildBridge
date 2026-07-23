package com.example.demo.repository;

import com.example.demo.entity.ConstructionTask;
import com.example.demo.entity.ProjectInquiry;
import com.example.demo.entity.enums.TaskStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConstructionTaskRepository extends JpaRepository<ConstructionTask, Long> {

    List<ConstructionTask> findByProject(ProjectInquiry project);

    List<ConstructionTask> findByStatus(TaskStatus status);

    List<ConstructionTask> findByProjectAndStatus(ProjectInquiry project, TaskStatus status);

}