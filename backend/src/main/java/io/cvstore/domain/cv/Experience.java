package io.cvstore.domain.cv;

import lombok.Data;

import java.util.List;

/**
 * @author Shanika Wijerathna
 * @since 25/09/20
 */

@Data
public class Experience {
    private String company;
    private String url;
    private String location;
    private String period;
    private String role;
    private List<String> description;
    private List<String> techs;
}
