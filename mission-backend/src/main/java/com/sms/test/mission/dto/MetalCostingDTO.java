package com.sms.test.mission.dto;

import java.util.Date;
import com.sms.test.mission.entity.MetalCosting;
import lombok.Data;

@Data
public class MetalCostingDTO
{
    private Long id;
    private String city;
    private Date startDate;
    private Date endDate;
    private String price;
    private String status;
    private String color;
    
    public static MetalCostingDTO from(MetalCosting costing) {
    	MetalCostingDTO response = new MetalCostingDTO();
    	response.setCity(costing.getCity());
    	response.setColor(costing.getColor());
    	response.setEndDate(costing.getEndDate());
    	response.setStartDate(costing.getStartDate());
    	response.setId(costing.getId());
    	response.setStatus(costing.getStatus());
    	response.setPrice(costing.getPrice());
    	return response;
    }
   
}
