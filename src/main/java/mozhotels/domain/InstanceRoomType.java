package mozhotels.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A InstanceRoomType.
 */
@Entity
@Table(name = "instance_room_type")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "instanceroomtype")
public class InstanceRoomType implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "instance_room_type_name", nullable = false)
    private String instanceRoomTypeName;

    @Column(name = "description")
    private String description;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "capacity_adults")
    private Integer capacityAdults;

    @Column(name = "capacity_children")
    private Integer capacityChildren;

    @NotNull
    @Column(name = "online_price", precision=10, scale=2, nullable = false)
    private BigDecimal onlinePrice;

    @NotNull
    @Column(name = "branch_price", precision=10, scale=2, nullable = false)
    private BigDecimal branchPrice;

    @Column(name = "tax_include")
    private Boolean taxInclude;

    @Column(name = "tax", precision=10, scale=2)
    private BigDecimal tax;

    @Lob
    @Column(name = "photo_principal")
    private byte[] photoPrincipal;

    @Column(name = "photo_principal_content_type")
    private String photoPrincipalContentType;

    @OneToMany(mappedBy = "instanceRoomType")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Picture> pictures = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "instance_room_type_instance_room_facility",
               joinColumns = @JoinColumn(name="instance_room_types_id", referencedColumnName="ID"),
               inverseJoinColumns = @JoinColumn(name="instance_room_facilities_id", referencedColumnName="ID"))
    private Set<InstanceFacility> instanceRoomFacilities = new HashSet<>();

    @ManyToOne
    private InstanceTur instanceTur;

    @ManyToMany(mappedBy = "instanceRoomTypes")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Booking> bookings = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInstanceRoomTypeName() {
        return instanceRoomTypeName;
    }

    public void setInstanceRoomTypeName(String instanceRoomTypeName) {
        this.instanceRoomTypeName = instanceRoomTypeName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getCapacityAdults() {
        return capacityAdults;
    }

    public void setCapacityAdults(Integer capacityAdults) {
        this.capacityAdults = capacityAdults;
    }

    public Integer getCapacityChildren() {
        return capacityChildren;
    }

    public void setCapacityChildren(Integer capacityChildren) {
        this.capacityChildren = capacityChildren;
    }

    public BigDecimal getOnlinePrice() {
        return onlinePrice;
    }

    public void setOnlinePrice(BigDecimal onlinePrice) {
        this.onlinePrice = onlinePrice;
    }

    public BigDecimal getBranchPrice() {
        return branchPrice;
    }

    public void setBranchPrice(BigDecimal branchPrice) {
        this.branchPrice = branchPrice;
    }

    public Boolean isTaxInclude() {
        return taxInclude;
    }

    public void setTaxInclude(Boolean taxInclude) {
        this.taxInclude = taxInclude;
    }

    public BigDecimal getTax() {
        return tax;
    }

    public void setTax(BigDecimal tax) {
        this.tax = tax;
    }

    public byte[] getPhotoPrincipal() {
        return photoPrincipal;
    }

    public void setPhotoPrincipal(byte[] photoPrincipal) {
        this.photoPrincipal = photoPrincipal;
    }

    public String getPhotoPrincipalContentType() {
        return photoPrincipalContentType;
    }

    public void setPhotoPrincipalContentType(String photoPrincipalContentType) {
        this.photoPrincipalContentType = photoPrincipalContentType;
    }

    public Set<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(Set<Picture> pictures) {
        this.pictures = pictures;
    }

    public Set<InstanceFacility> getInstanceRoomFacilities() {
        return instanceRoomFacilities;
    }

    public void setInstanceRoomFacilities(Set<InstanceFacility> instanceFacilities) {
        this.instanceRoomFacilities = instanceFacilities;
    }

    public InstanceTur getInstanceTur() {
        return instanceTur;
    }

    public void setInstanceTur(InstanceTur instanceTur) {
        this.instanceTur = instanceTur;
    }

    public Set<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(Set<Booking> bookings) {
        this.bookings = bookings;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        InstanceRoomType instanceRoomType = (InstanceRoomType) o;
        if(instanceRoomType.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, instanceRoomType.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "InstanceRoomType{" +
            "id=" + id +
            ", instanceRoomTypeName='" + instanceRoomTypeName + "'" +
            ", description='" + description + "'" +
            ", quantity='" + quantity + "'" +
            ", capacityAdults='" + capacityAdults + "'" +
            ", capacityChildren='" + capacityChildren + "'" +
            ", onlinePrice='" + onlinePrice + "'" +
            ", branchPrice='" + branchPrice + "'" +
            ", taxInclude='" + taxInclude + "'" +
            ", tax='" + tax + "'" +
            ", photoPrincipal='" + photoPrincipal + "'" +
            ", photoPrincipalContentType='" + photoPrincipalContentType + "'" +
            '}';
    }
}
