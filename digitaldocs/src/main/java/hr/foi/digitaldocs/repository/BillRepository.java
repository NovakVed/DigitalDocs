package hr.foi.digitaldocs.repository;

import hr.foi.digitaldocs.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BillRepository extends JpaRepository<Bill, Integer> {

    @Override
    List<Bill> findAll();

    List<Bill> findByAccount_Username(String username);
}
