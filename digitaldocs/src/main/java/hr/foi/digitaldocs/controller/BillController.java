package hr.foi.digitaldocs.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import hr.foi.digitaldocs.model.Bill;
import hr.foi.digitaldocs.model.ImageFe;
import hr.foi.digitaldocs.model.Transaction;
import hr.foi.digitaldocs.service.BillService;
import hr.foi.digitaldocs.service.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Stream;

@RestController
@RequestMapping(value = "/bills")
public class BillController {

    @Autowired
    private BillService billService;

    private static Logger logger = LoggerFactory.getLogger(BillController.class);

    @GetMapping()
    @PreAuthorize(value = "hasAnyRole('USER')")
    public @ResponseBody ResponseEntity<List<ImageFe>> getAll() {
        return new ResponseEntity<>(billService.getAllFiles(), HttpStatus.OK);
    }

    @DeleteMapping()
    @PreAuthorize(value = "hasAnyRole('USER')")
    public @ResponseBody ResponseEntity<List<ImageFe>> deleteAll(@RequestParam("secret") String secret) {
        if(secret != null && secret.equals("air-demo"))
            billService.deleteAllFiles();

        return new ResponseEntity<>(billService.getAllFiles(), HttpStatus.OK);
    }



}
