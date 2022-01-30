package hr.foi.digitaldocs.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false, name = "bill_id")
    private String billId;

    @Column(nullable = false, name = "bill_total")
    private Double billTotal;

    @Column(nullable = false, name = "address")
    private String address;

    @Column(nullable = false, name = "masked_pan")
    private String maskedPan;

    @Column(nullable = false, name = "pan_hash")
    private String panHash;

    @Column(name="transaction_date")
    private Timestamp date;

    @Column(name="payment_method")
    private String methodOfPayment;

    @Lob
    @Type(type = "org.hibernate.type.ImageType")
    @Column(name = "image")
    private byte[] catlogImg;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_user", nullable = false)
    private Account account;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_store", nullable = false)
    private Store store;


}