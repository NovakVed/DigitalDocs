package hr.foi.digitaldocs.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)@JsonPropertyOrder({
        "locationOfSellingPlace",
        "timestamp",
        "billID",
        "billTotal",
        "sellerName",
        "storeName",
        "image"
})
public class ImageFe {
    @JsonProperty("locationOfSellingPlace")
    private String locationOfSellingPlace;
    @JsonProperty("timestamp")
    private Date timestamp;
    @JsonProperty("billID")
    private String billID;
    @JsonProperty("billTotal")
    private Double billTotal;
    @JsonProperty("sellerName")
    private String sellerName;
    @JsonProperty("storeName")
    private String storeName;
    @JsonProperty("image")
    private String image;
    @JsonIgnore
    private Map< String, Object > additionalProperties = new HashMap< String, Object >();

    public ImageFe() {
    }

    public ImageFe(String locationOfSellingPlace, Date timestamp, String billID, Double billTotal, String sellerName, String storeName, String image) {
        this.locationOfSellingPlace = locationOfSellingPlace;
        this.timestamp = timestamp;
        this.billID = billID;
        this.billTotal = billTotal;
        this.sellerName = sellerName;
        this.storeName = storeName;
        this.image = image;
    }

    public String getLocationOfSellingPlace() {
        return locationOfSellingPlace;
    }

    public void setLocationOfSellingPlace(String locationOfSellingPlace) {
        this.locationOfSellingPlace = locationOfSellingPlace;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getBillID() {
        return billID;
    }

    public void setBillID(String billID) {
        this.billID = billID;
    }

    public Double getBillTotal() {
        return billTotal;
    }

    public void setBillTotal(Double billTotal) {
        this.billTotal = billTotal;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "ImageFe{" +
                "locationOfSellingPlace='" + locationOfSellingPlace + '\'' +
                ", timestamp=" + timestamp +
                ", billID='" + billID + '\'' +
                ", billTotal=" + billTotal +
                ", sellerName='" + sellerName + '\'' +
                ", storeName='" + storeName + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
