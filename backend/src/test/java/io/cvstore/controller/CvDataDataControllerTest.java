package io.cvstore.controller;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import io.micronaut.context.annotation.Value;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.client.RxHttpClient;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.test.annotation.MicronautTest;
import org.bson.Document;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.testcontainers.containers.MongoDBContainer;

import javax.inject.Inject;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * @author Shanika Wijerathna
 * @since 25/09/20
 */
@MicronautTest
class CvDataControllerTest {

    @Inject
    @Client("/")
    RxHttpClient client;

    @Inject
    MongoClient mongoClient;

    @Value("${app.mongoDb.databaseName}")
    String databaseName;

    @Value("${app.mongoDb.databaseName}")
    String collectionName;

    final MongoDBContainer mongoDBContainer = new MongoDBContainer();

    final String DATA = "{\"firstName\":\"Shanika\",\"lastName\":\"Wijerathna\"}";

    @BeforeEach
    void setUp() {
        mongoDBContainer.start();
        setUpData();
    }

    private void setUpData() {
        MongoDatabase db = mongoClient.getDatabase(databaseName);
        db.createCollection(collectionName);
        db.getCollection(collectionName)
            .insertOne(Document.parse(DATA));
    }

    @Test
    void testGetCvData() {
        HttpRequest<String> request = HttpRequest.GET("/data");
        String body = client.toBlocking().retrieve(request);

        assertNotNull(body);
        assertEquals(DATA, body);
    }
}
