package io.cvstore.domain.cv;

import lombok.Data;

import java.util.List;

/**
 * @author Shanika Wijerathna
 * @since 25/09/20
 */

@Data
public class About {
    private String role;
    private List<String> description;
}
