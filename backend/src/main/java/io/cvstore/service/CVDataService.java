package io.cvstore.service;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import io.cvstore.domain.CV;
import lombok.extern.slf4j.Slf4j;
import org.bson.Document;

import javax.inject.Inject;
import javax.inject.Singleton;

/**
 * @author Shanika Wijerathna
 * @since 24/09/20
 */

@Singleton
@Slf4j
public class CVDataService {

    @Inject
    MongoClient mongoClient;

    public CV getCvData() {
        MongoCollection<Document> collection = mongoClient.getDatabase("cvdata")
            .getCollection("cvdata");

        return collection.find(CV.class).first();
    }
}
