package hr.foi.digitaldocs.repository;

import hr.foi.digitaldocs.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Integer> {
    Account findByUsername(String userName);
}
