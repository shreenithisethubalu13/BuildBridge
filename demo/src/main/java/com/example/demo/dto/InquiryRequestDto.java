package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InquiryRequestDto {

    private String siteName;

    private String projectType;

    private String location;

    private Integer bhkCount;

    private Integer floorCount;

    private Double budget;

    private String duration;

    private LocalDate startDate;

    private LocalDate endDate;

}