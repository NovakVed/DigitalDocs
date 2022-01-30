package hr.foi.digitaldocs.login;

import hr.foi.digitaldocs.login.CrmUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.approval.UserApprovalHandler;
import org.springframework.security.oauth2.provider.token.TokenStore;

import javax.sql.DataSource;

@Configuration
@EnableAuthorizationServer
public class AuthServerOAuth2Config extends AuthorizationServerConfigurerAdapter {

	@Autowired
	@Qualifier("authenticationManagerBean")
	private AuthenticationManager authenticationManager;
	@Autowired
	DataSource dataSource;
	@Autowired
	private TokenStore tokenStore;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private UserApprovalHandler userApprovalHandler;
	@Autowired
	private CrmUserDetailsService crmUserDetailsService;

	@Value("${token.expiration.time}")
	private int tokenExpTime;

	@Override
	public void configure(ClientDetailsServiceConfigurer clients) throws Exception {

		// both client and user pass MUST be password encoded
		clients
		.inMemory()
		.withClient("digitalDocs_")
		.authorizedGrantTypes("implicit")
		.scopes("read")
		.autoApprove(true)
		.and()
		.withClient("digitalDocs_fe")
		.secret(passwordEncoder.encode("secret"))
		.authorizedGrantTypes("password", "authorization_code", "refresh_token","client_credentials")
		.authorities("USER")
		.scopes("read", "write", "trust")
		.accessTokenValiditySeconds(tokenExpTime);
	}

	@Override
	public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
		endpoints
		.tokenStore(tokenStore)
		.pathMapping("/oauth/token", "/login")
		.userApprovalHandler(userApprovalHandler)
		.authenticationManager(authenticationManager)
		.userDetailsService(crmUserDetailsService);
	}

	@Override
	public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
		security
		.tokenKeyAccess("permitAll()")
		.checkTokenAccess("isAuthenticated()");
	}

}
