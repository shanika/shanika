package io.cvstore.controller;

import io.micronaut.http.HttpRequest;
import io.micronaut.http.client.RxHttpClient;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.test.annotation.MicronautTest;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * @author Shanika Wijerathna
 * @since 25/09/20
 */
@MicronautTest
class CVDataControllerTest {

    @Inject
    @Client("/data")
    RxHttpClient client;

    @Test
    void testGetCvData() {
        HttpRequest<String> request = HttpRequest.GET("/");
        String body = client.toBlocking().retrieve(request);

        assertNotNull(body);
    }
}
