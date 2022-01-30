package hr.foi.digitaldocs.login;

import hr.foi.digitaldocs.model.Account;
import hr.foi.digitaldocs.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CrmUserDetailsService implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        Account account = accountRepository.findByUsername(userName);

        if (account == null) {
            throw new UsernameNotFoundException("UserName " + userName + " not found");
        }

        return new CrmUserDetails(account);
    }

}
