package io.cvstore.controller;

import io.cvstore.domain.CV;
import io.cvstore.service.CVDataService;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Produces;

import javax.inject.Inject;


/**
 * @author Shanika Wijerathna
 * @since 24/09/20
 */
@Controller("/data")
public class CVDataController {

    @Inject
    CVDataService cvDataService;

    @Get
    @Produces(MediaType.APPLICATION_JSON)
    public CV getCvData() {
        return cvDataService.getCvData();
    }
}
