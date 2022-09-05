import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isShowPassword: false
        }

    }

    handlerUsername = (event) => {
        this.setState({ username: event.target.value })

    }
    handerPassword = (event) => {
        this.setState({ password: event.target.value })

    }
    handerLogin = () => {

    }
    showHide=()=>{
       this.setState({isShowPassword: !this.state.isShowPassword})
    }
    render() {


        return (
            <div className="login-background">
                <div className="login-container p-1 ">
                    <div className="login-conten">
                        <div className="col-12 text-center">LOGIN</div>
                        <div className="col-12 form-group">
                            <label>UserName:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.username}
                                onChange={(event) => this.handlerUsername(event)} />
                        </div>
                        <div className="col-12 form-group">
                            <label>Password:</label>
                            <div className="custom-input-passwor">
                                <input
                                    type={this.state.isShowPassword ? "text" :"password"}
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={(event) => this.handerPassword(event)} />
                             <span onClick={() => {this.showHide()}}>
                             <i class={this.state.isShowPassword ? "fas fa-eye-slash " :"fas fa-eye"}></i>
                             </span>
                            </div>
                            

                        </div>
                        <button type="submit" className="btn  mt-3 " onClick={() => this.handerLogin()}>Login</button>
                        <div className="col-12 ">
                            <span>Forgot Password</span>
                        </div>
                        <div className="col-12 text-center ">
                            <span className="">Or Login With</span>
                            <i class="fas fa-wifi-2"></i><i class="fas fa-wifi"></i>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-facebook social-icon fb"></i>
                            <i className="fab fa-google-plus social-icon gg"></i>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
