import { useState } from "react";
import axios from 'axios';
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginForm, setLoginForm] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('https://restihp.ironhold.net/rest-api/login/demo/'+email+'/2592000000?Accept=application%2Fjson&Content-type=application%2Fjson', password )
    .then((response) => {
        console.log(response.data.status);
        alert(response.data.message);
    })
    .catch((error) => {
        console.log(error);
    });
  };

  const handleResetSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.get('https://restihp.ironhold.net/rest-api/users/reset/demo/'+email)
    .then((response) => {
        console.log(response.data.status);
        alert(response.data.message);
    })
    .catch((error) => {
        console.log(error);
    });
  };

  return (
    <div className="height100">
      <div className="main-ui-view">
        <div className="login-layout login-layout-white">
          <div className="login-container">
              <div className="position-relative">
                  <div className={loginForm? "login-box login-box-ironhold border widget-box visible": "login-box login-box-ironhold border widget-box"} >
                      <div className="widget-body">
                          <div className="widget-main background-white">
                              <div className="login-logo" title="IronHold"></div>
                              <form name="mainLogin" onSubmit={handleSubmit} className="login-form ng-pristine ng-invalid ng-invalid-required">
                                  <h4 className="header lighter bigger">
                                      Login
                                  </h4>
                                
                                  <fieldset>
                                      <label className="block clearfix">
                                        <span className="block input-icon input-icon-right">
                                          <input type="text" data-ng-model="username" className="auto-focus form-control username ng-pristine ng-untouched ng-invalid ng-invalid-required" name="username" placeholder="email"  data-ng-keydown="removeErrors()" value={email} onChange={handleEmailChange} />
                                          <i className="icon-user"></i>
                                        </span>
                                      </label>

                                      <label className="block clearfix">
                                        <span className="block input-icon input-icon-right">
                                          <input type="password" className="form-control pass ng-pristine ng-untouched ng-invalid ng-invalid-required" name="password" placeholder="password"  data-ng-model="password" value={password} onChange={handlePasswordChange} />
                                          <i className="icon-lock"></i>
                                        </span>
                                      </label>

                                      <label className="block clearfix">
                                        <span className="block input-icon input-icon-right">
                                          <input type="text" className="form-control client-key ng-pristine ng-untouched ng-valid ng-valid-required" name="clientKey" placeholder="client key"  data-ng-model="clientKey" value="DEMO" data-ng-disabled="disableClientKey" disabled data-ng-keydown="removeErrors()"  />
                                          <i className="icon-lock"></i>
                                        </span>
                                      </label>

                                      <div className="space"></div>

                                      <div className="clearfix flex justify-between">

                                        <div className="flex items-center ">
                                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label  className="checkbox-label ml-2  text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                            
                                        </div>
                                        <input type="submit" value="Login" className="login-form-button pull-right btn btn-sm btn-blue" />
                                      </div>

                                      <div className="space-4"></div>
                                  </fieldset>
                                  
                              </form>
                          </div>
                          
                          <div className="toolbar clearfix">
                              <div className="login-footer ng-binding">© 2023 Reqo, Inc.</div>

                              <div className="login-footer login-footer-right pull-right">
                                  <a className="pull-right forgot-password-link" onClick={()=>setLoginForm(false)} data-ng-click="makeVisible('forgot-password')">
                                      Forgot password?
                                  </a>
                              </div>

                          </div>
                      </div>
                  </div>
                  <div className={loginForm? "forgot-box forgot-password widget-box border": "forgot-box forgot-password widget-box border visible"}>
                    <div className="widget-body">
                        <div className="widget-main background-white">
                          <div className="login-logo" title="IronHold"></div>


                          <form onSubmit={handleResetSubmit} className="ng-pristine ng-valid">
                              <h4 className="header lighter bigger">
                                  Retrieve Password
                              </h4>


                              <div className="space-6"></div>
                              <p>
                                  Please enter your username and client key.<br/> Instructions on how to reset your password will be sent on email.
                              </p>

                              <fieldset>
                                  <label className="block clearfix">
                                      <span className="block input-icon input-icon-right">
                                        <input type="text" className="form-control ng-pristine ng-untouched ng-valid" data-ng-model="forgotPasswordUsername" name="username" placeholder="email" value={email}/>
                                      </span>
                                  </label>

                                  <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                      <input type="text" className="form-control client-key ng-pristine ng-untouched ng-valid" data-ng-model="clientKey" name="client_key" data-ng-disabled="disableClientKey" placeholder="client key" value="DEMO" disabled/>
                                    </span>     
                                  </label>

                                  <div className="space"></div>
                                  <div className="cleafix">
                                      <button type="submit" className="login-form-button pull-right btn btn-sm btn-blue">
                                          <i className="icon-lightbulb"></i>
                                          Submit
                                      </button>
                                  </div>
                                  <div className="space-4"></div>
                              </fieldset>
                          </form>
                        </div>
                        <div className="toolbar center">
                            <div className="login-footer">
                                <a className="back-to-login-link" onClick={()=>setLoginForm(true)}>
                                    &lt; Back to login
                                </a>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default LoginPage;
