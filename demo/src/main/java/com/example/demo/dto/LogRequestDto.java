package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LogRequestDto {

    private Long projectId;
    private LocalDate logDate;
    private Integer laborCount;
    private String weatherCondition;
    private String notes;
    private Integer progressIncrement;

}