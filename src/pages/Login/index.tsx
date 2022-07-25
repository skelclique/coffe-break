import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import LogoImg from '../../assets/logo.svg';

import './styles.scss';

export function Login() {
  return (
    <div className="loginContainer">
      <div className="loginApp-container">
        <img src={LogoImg} alt="Logo Raimax" />
        <Button path="google" />
        <div className="separatorLine">ou faça login</div>
        <Input placeholder="nome@raimax.com.br" type="text" />
        <Input placeholder="••••••••••" type="password" />
        <Button path="login" />
      </div>
    </div>
  );
}
