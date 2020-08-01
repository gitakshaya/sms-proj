package com.sms.test.mission;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sms.test.mission.entity.MetalCosting;
import com.sms.test.mission.services.DataInitializerService;

@SpringBootApplication
public class MissionApplication {

	public static void main(String[] args) {
		SpringApplication.run(MissionApplication.class, args);
	}
	@Bean
	CommandLineRunner runner(DataInitializerService dataInitService) {
		return args -> {
			// read json and write to db
			ObjectMapper mapper = new ObjectMapper();
			TypeReference<List<MetalCosting>> typeReference = new TypeReference<List<MetalCosting>>(){};
			InputStream inputStream = TypeReference.class.getResourceAsStream("/json/data.json");
			try {
				List<MetalCosting> costings = mapper.readValue(inputStream,typeReference);
				dataInitService.save(costings);
				System.out.println("Costing saved!");
			} catch (IOException e){
				System.out.println("Unable to save users: " + e.getMessage());
			}
		};
	}

}
