package com.example.simulator;

import java.text.SimpleDateFormat;
import java.util.Date;

public class LastTransaction {
    private int sellerID;
    private int storeID;
    private String billID;
    private String methodOfPayment;
    private double billTotal;

    private String maskedPAN;
    private String PANHash;
    private String location;

    private String timestamp;

    public LastTransaction(String billID, double billTotal, int sellerID, int storeID, String methodOfPayment, String maskedPAN, String PANHash, String location) {
        this.billID = billID;
        this.billTotal = billTotal;
        this.sellerID = sellerID;
        this.storeID = storeID;
        this.methodOfPayment = methodOfPayment;
        this.maskedPAN = maskedPAN;
        this.PANHash = PANHash;
        this.location = location;
        this.timestamp = date();
    }

    private String date() {
        SimpleDateFormat format;
        format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        return format.format(new Date());
    }

    public int getSellerID() {
        return sellerID;
    }

    public void setSellerID(int sellerID) {
        this.sellerID = sellerID;
    }

    public int getStoreID() {
        return storeID;
    }

    public void setStoreID(int storeID) {
        this.storeID = storeID;
    }

    public String getBillID() {
        return billID;
    }

    public void setBillID(String billID) {
        this.billID = billID;
    }

    public String getMethodOfPayment() {
        return methodOfPayment;
    }

    public void setMethodOfPayment(String methodOfPayment) {
        this.methodOfPayment = methodOfPayment;
    }

    public double getBillTotal() {
        return billTotal;
    }

    public void setBillTotal(double billTotal) {
        this.billTotal = billTotal;
    }

    public String getMaskedPAN() {
        return maskedPAN;
    }

    public void setMaskedPAN(String maskedPAN) {
        this.maskedPAN = maskedPAN;
    }

    public String getPANHash() {
        return PANHash;
    }

    public void setPANHash(String PANHash) {
        this.PANHash = PANHash;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}