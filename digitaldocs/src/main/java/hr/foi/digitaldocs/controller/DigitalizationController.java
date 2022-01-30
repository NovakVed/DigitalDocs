package hr.foi.digitaldocs.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import hr.foi.digitaldocs.model.Bill;
import hr.foi.digitaldocs.model.Transaction;
import hr.foi.digitaldocs.service.BillService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/document")
public class DigitalizationController {

    @Autowired
    private BillService billService;

    private static Logger logger = LoggerFactory.getLogger(DigitalizationController.class);


    @PostMapping()

    public @ResponseBody
    ResponseEntity<Boolean> newBill(
            @RequestParam("transaction") String transaction,
            @RequestParam("file") MultipartFile file) throws Exception {

        logger.info(transaction);

        Transaction trans = new ObjectMapper().readValue(transaction, Transaction.class);

        Bill bill = billService.
                store(trans, file);

        return new ResponseEntity<>(bill != null, bill != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

}
