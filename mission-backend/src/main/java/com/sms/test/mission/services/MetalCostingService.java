package com.sms.test.mission.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sms.test.mission.dto.MetalCostingDTO;
import com.sms.test.mission.entity.MetalCosting;
import com.sms.test.mission.repo.MetalCostingRepo;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class MetalCostingService
{
	@Autowired
	private MetalCostingRepo metalCostingRepo;
	
	public List<MetalCostingDTO> getAllCostings(){
		log.info("Fetching all the costing");
		return metalCostingRepo.findAll().stream().map(MetalCostingDTO::from).collect(Collectors.toList());
	}

	public MetalCostingDTO getCosting(Long id)
	{
		log.info("Fetching the costing for {}",id);
		Optional<MetalCosting> costing = metalCostingRepo.findById(id);
		if(costing.isPresent()) {
			return MetalCostingDTO.from(costing.get());
		};
		throw new RuntimeException("Resource not found");
	}

	public MetalCostingDTO saveCosting(MetalCostingDTO metalCostingDTO)
	{
		log.info("saving the costing for {}",metalCostingDTO);
		try {
		metalCostingRepo.save(MetalCosting.from(metalCostingDTO));
		}catch (Exception e) {
			log.error(e.getMessage());
			throw new RuntimeException("Resource could not be saved");
		}
		return metalCostingDTO;
	}

	public void deleteCosting(Long id)
	{
		try {
			metalCostingRepo.deleteById(id);
		}catch (Exception e) {
			log.error(e.getMessage());
			throw new RuntimeException("Resource could not be deleted");
		}
	}

	public void updateCosting(Long id,MetalCostingDTO costingDTO)
	{
		try {
			MetalCosting costing = MetalCosting.from(costingDTO);
			costing.setId(id);
			metalCostingRepo.save(costing);
		}catch (Exception e) {
			log.error(e.getMessage());
			throw new RuntimeException("Resource could not be updated");
		}
		
	}
}
