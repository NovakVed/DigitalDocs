package hr.foi.digitaldocs.model;

import com.fasterxml.jackson.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)@JsonPropertyOrder({
        "maskedPAN",
        "PANHash",
        "location",
        "timestamp",
        "email",
        "billID",
        "billTotal",
        "sellerID",
        "storeID",
        "methodOfPayment"
})
public class Transaction {
    @JsonProperty("maskedPAN")
    private String maskedPAN;
    @JsonProperty("PANHash")
    private String panHash;
    @JsonProperty("location")
    private String location;
    @JsonProperty("timestamp")
    private Date timestamp;
    @JsonProperty("email")
    private String email;
    @JsonProperty("billID")
    private String billID;
    @JsonProperty("billTotal")
    private Double billTotal;
    @JsonProperty("sellerID")
    private Integer sellerId;
    @JsonProperty("storeID")
    private Integer storeId;
    @JsonProperty("methodOfPayment")
    private String methodOfPayment;

    @JsonIgnore
    private Map < String, Object > additionalProperties = new HashMap < String, Object > ();
    /**
     * No args constructor for use in serialization
     *
     */
    public Transaction() {}

    /**
     *
     * @param maskedPAN
     * @param panHash
     * @param location
     * @param timestamp
     */
    public Transaction(String maskedPAN, String panHash, String location, Date timestamp) {
        super();
        this.maskedPAN = maskedPAN;
        this.panHash = panHash;
        this.location = location;
        this.timestamp = timestamp;
    }

    @JsonProperty("maskedPAN")
    public String getMaskedPAN() {
        return maskedPAN;
    }

    @JsonProperty("maskedPAN")
    public void setMaskedPAN(String maskedPAN) {
        this.maskedPAN = maskedPAN;
    }

    @JsonProperty("PANHash")
    public String getPanHash() {
        return panHash;
    }

    @JsonProperty("PANHash")
    public void setPanHash(String panHash) {
        this.panHash = panHash;
    }

    @JsonProperty("location")
    public String getLocation() {
        return location;
    }

    @JsonProperty("location")
    public void setLocation(String location) {
        this.location = location;
    }

    @JsonProperty("timestamp")
    public Date getTimestamp() {
        return timestamp;
    }

    @JsonProperty("timestamp")
    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    @JsonProperty("email")
    public String getEmail() {
        return email;
    }

    @JsonProperty("email")
    public void setEmail(String email) {
        this.email = email;
    }

    @JsonProperty("billID")
    public String getBillID() {
        return billID;
    }

    @JsonProperty("billID")
    public void setBillID(String billID) {
        this.billID = billID;
    }

    @JsonProperty("billTotal")
    public Double getBillTotal() {
        return billTotal;
    }

    @JsonProperty("billTotal")
    public void setBillTotal(Double billTotal) {
        this.billTotal = billTotal;
    }

    @JsonProperty("sellerID")
    public Integer getSellerId() {
        return sellerId;
    }

    @JsonProperty("sellerID")
    public void setSellerId(Integer sellerId) {
        this.sellerId = sellerId;
    }

    @JsonProperty("storeID")
    public Integer getStoreId() {
        return storeId;
    }

    @JsonProperty("storeID")
    public void setStoreId(Integer storeId) {
        this.storeId = storeId;
    }

    @JsonProperty("methodOfPayment")
    public String getMethodOfPayment() {
        return methodOfPayment;
    }

    @JsonProperty("methodOfPayment")
    public void setMethodOfPayment(String methodOfPayment) {
        this.methodOfPayment = methodOfPayment;
    }

    @JsonAnyGetter
    public Map < String,
            Object > getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "maskedPAN='" + maskedPAN + '\'' +
                ", panHash='" + panHash + '\'' +
                ", location='" + location + '\'' +
                ", timestamp=" + timestamp +
                ", email='" + email + '\'' +
                ", billID='" + billID + '\'' +
                ", billTotal=" + billTotal +
                ", sellerId=" + sellerId +
                ", storeId=" + storeId +
                '}';
    }
}