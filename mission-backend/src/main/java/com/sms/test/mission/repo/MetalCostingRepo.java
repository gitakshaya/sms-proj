package com.sms.test.mission.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sms.test.mission.entity.MetalCosting;

public interface MetalCostingRepo extends JpaRepository<MetalCosting, Long>
{

}
