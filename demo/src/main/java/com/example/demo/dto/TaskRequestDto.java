package com.example.demo.dto;

import com.example.demo.entity.enums.Priority;
import com.example.demo.entity.enums.TaskStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskRequestDto {

    private Long projectId;

    private String title;

    private String description;

    private Priority priority;

    private TaskStatus status;

    private BigDecimal estimatedCost;

}