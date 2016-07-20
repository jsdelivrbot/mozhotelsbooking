package mozhotels.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import mozhotels.domain.enumeration.FacilityType;

/**
 * A InstanceFacilityType.
 */
@Entity
@Table(name = "instance_facility_type")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "instancefacilitytype")
public class InstanceFacilityType implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "facility_type", nullable = false)
    private FacilityType facilityType;

    @NotNull
    @Column(name = "instance_facility_type_name", nullable = false)
    private String instanceFacilityTypeName;

    @Column(name = "description")
    private String description;

    @Column(name = "instance_facility")
    private Boolean instanceFacility;

    @Column(name = "instance_room_facility")
    private Boolean instanceRoomFacility;

    @OneToMany(mappedBy = "instanceFacilityType")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<InstanceFacility> instanceFacilities = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public FacilityType getFacilityType() {
        return facilityType;
    }

    public void setFacilityType(FacilityType facilityType) {
        this.facilityType = facilityType;
    }

    public String getInstanceFacilityTypeName() {
        return instanceFacilityTypeName;
    }

    public void setInstanceFacilityTypeName(String instanceFacilityTypeName) {
        this.instanceFacilityTypeName = instanceFacilityTypeName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean isInstanceFacility() {
        return instanceFacility;
    }

    public void setInstanceFacility(Boolean instanceFacility) {
        this.instanceFacility = instanceFacility;
    }

    public Boolean isInstanceRoomFacility() {
        return instanceRoomFacility;
    }

    public void setInstanceRoomFacility(Boolean instanceRoomFacility) {
        this.instanceRoomFacility = instanceRoomFacility;
    }

    public Set<InstanceFacility> getInstanceFacilities() {
        return instanceFacilities;
    }

    public void setInstanceFacilities(Set<InstanceFacility> instanceFacilities) {
        this.instanceFacilities = instanceFacilities;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        InstanceFacilityType instanceFacilityType = (InstanceFacilityType) o;
        if(instanceFacilityType.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, instanceFacilityType.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "InstanceFacilityType{" +
            "id=" + id +
            ", facilityType='" + facilityType + "'" +
            ", instanceFacilityTypeName='" + instanceFacilityTypeName + "'" +
            ", description='" + description + "'" +
            ", instanceFacility='" + instanceFacility + "'" +
            ", instanceRoomFacility='" + instanceRoomFacility + "'" +
            '}';
    }
}
