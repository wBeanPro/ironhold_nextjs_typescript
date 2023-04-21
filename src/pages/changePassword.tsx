import { useState } from "react";

const changePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Handle login logic
  };

  return (
    <div className="height100">
      <div className="main-ui-view">
        <div className="login-layout login-layout-white">
          <div className="login-container">
              <div className="position-relative">
                  <div className="login-box login-box-ironhold border widget-box visible">
                      <div className="widget-body">
                          <div className="widget-main background-white">
                              <form name="mainLogin" className="login-form ng-pristine ng-invalid ng-invalid-required">
                                  <h4 className="header lighter bigger">
                                      Login
                                  </h4>
                                
                                  <fieldset>
                                      <label className="block clearfix">
                                        <span className="block input-icon input-icon-right">
                                          <input type="text" data-ng-model="username" className="auto-focus form-control username ng-pristine ng-untouched ng-invalid ng-invalid-required" name="username" placeholder="email"  data-ng-keydown="removeErrors()" />
                                          <i className="icon-user"></i>
                                        </span>
                                      </label>

                                      <label className="block clearfix">
                                        <span className="block input-icon input-icon-right">
                                          <input type="password" className="form-control pass ng-pristine ng-untouched ng-invalid ng-invalid-required" name="password" placeholder="password"  data-ng-model="password" />
                                          <i className="icon-lock"></i>
                                        </span>
                                      </label>

                                      <label className="block clearfix">
                                        <span className="block input-icon input-icon-right">
                                          <input type="text" className="form-control client-key ng-pristine ng-untouched ng-valid ng-valid-required" name="clientKey" placeholder="client key"  data-ng-model="clientKey" data-ng-disabled="disableClientKey" data-ng-keydown="removeErrors()"  />
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
                                  <a className="pull-right forgot-password-link" data-ng-click="makeVisible('forgot-password')">
                                      Forgot password?
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

export default changePassword;
