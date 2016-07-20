package mozhotels.repository;

import mozhotels.domain.InstanceTur;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the InstanceTur entity.
 */
@SuppressWarnings("unused")
public interface InstanceTurRepository extends JpaRepository<InstanceTur,Long> {

}
