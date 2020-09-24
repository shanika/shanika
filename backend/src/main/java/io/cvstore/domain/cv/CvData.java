package io.cvstore.domain.cv;

import lombok.Data;

import java.util.List;

/**
 * @author Shanika Wijerathna
 * @since 25/09/20
 */

@Data
public class CvData {
    private String firstName;
    private String lastName;
    private About about;
    private ContactDetails contactDetails;
    private List<Experience> experience;
    private List<Experience> projects;
    private List<String> primarySkills;
    private List<String> secondarySkills;
    private List<Qualification> qualifications;
    private List<Certification> certifications;
}
