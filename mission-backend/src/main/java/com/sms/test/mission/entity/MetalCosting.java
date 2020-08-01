package com.sms.test.mission.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sms.test.mission.dto.MetalCostingDTO;
import lombok.Data;

@Entity
@Data
public class MetalCosting
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "city")
	private String city;
	@Column(name = "start_date")
	@JsonProperty("start_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "mm/dd/yyyy")
	private Date startDate;
	@Column(name = "end_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "mm/dd/yyyy")
	@JsonProperty("end_date")
	private Date endDate;
	@Column(name = "price")
	private String price;
	@Column(name = "status")
	private String status;
	@Column(name = "color")
	private String color;
	
	 public static MetalCosting from(MetalCostingDTO costing) {
	    	MetalCosting response = new MetalCosting();
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
