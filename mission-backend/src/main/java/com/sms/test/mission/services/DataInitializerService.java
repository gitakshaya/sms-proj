package com.sms.test.mission.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sms.test.mission.entity.MetalCosting;
import com.sms.test.mission.repo.MetalCostingRepo;

@Service
public class DataInitializerService
{
	@Autowired
	MetalCostingRepo metalCostingRepo;

	public void save(List<MetalCosting> costings)
	{
		metalCostingRepo.saveAll(costings);
	}

}
