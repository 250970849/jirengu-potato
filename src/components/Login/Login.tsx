import { Input,Icon ,Button} from 'antd';
import * as React from "react";
import axios from "src/config/axios";
import {Link} from "react-router-dom";
import './Login.scss';

interface ILoginState {
    account: string;
    password:string;

}
class Login extends React.Component<any, ILoginState>{
    constructor(props){
        super(props);
        this.state = {
            account: '',
            password: '',
        }
    }
    onChange=(key:keyof ILoginState,value:string)=>{
        const newState={}
        newState[key]=value
        this.setState(newState)
    }


    submit=async()=>{
        const {account,password} = this.state;
        try{
            await axios.post('sign_in/user',{
                account,
                password
            });
            console.log('成功');
        }catch(e){
            throw new Error(e)
        }
    };

    public render(){
        const {account,password} = this.state;
        return(
            <div className="Login" id="Login">
                <h1>番茄闹钟登陆</h1>
                <Input
                    placeholder="请输入你的用户名"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={account}
                    onChange={(e)=> this.onChange('account',e.target.value)}
                />
                <Input.Password value={password} placeholder="请输入密码"  onChange={(e)=> this.onChange('password',e.target.value)}/>
                <Button type="primary" className="loginButton" onClick={this.submit}>登陆</Button>
                <p>
                    如果你没有账号。请立即注册
                    <Link to="/SignUp">注册</Link>
                </p>
            </div>
        );
    }
}

export default Login;