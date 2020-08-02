package com.sms.test.mission.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sms.test.mission.dto.MetalCostingDTO;
import com.sms.test.mission.services.MetalCostingService;

@RestController
@RequestMapping("/costing")
public class MetalCostingController
{
	@Autowired
	MetalCostingService metalCostingService;
	@GetMapping("/")
	public List<MetalCostingDTO> getAllCostings(){
		return metalCostingService.getAllCostings();
	}
	@GetMapping("/{id}")
	public MetalCostingDTO getCosting(@PathVariable("id")Long id){
		return metalCostingService.getCosting(id);
	}
	@DeleteMapping("/{id}")
	public String deleteCosting(@PathVariable("id")Long id){
		return metalCostingService.deleteCosting(id);
	}
	@PutMapping("/{id}")
	public String updateCosting(@PathVariable("id")Long id,@RequestBody MetalCostingDTO metalCostingDTO){
		return metalCostingService.updateCosting(id,metalCostingDTO);
	}
	@PostMapping("/")
	public MetalCostingDTO saveCosting(@RequestBody MetalCostingDTO metalCostingDTO){
		return metalCostingService.saveCosting(metalCostingDTO);
	}
}
