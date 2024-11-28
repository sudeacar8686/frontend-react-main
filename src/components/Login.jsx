import { NavLink } from "react-router-dom";
import React from "react";
const Login =() => {
    return(
        <div>
            <h2>Giriş Yap</h2>
            <form>
                <div>
                    <label>E-Posta:</label>
                    <input type="emil"name="email"required/>

                </div>
                <div>
                <label>Şifre:</label>
                <input type="password"name="password"required/>
                </div>
                <button type="submit">Giriş Yap</button>
            </form>
            <div>
                <p><NavLink to="/register">Kayıt Ol</NavLink></p>
            </div>
        </div>
    );
};

export default Login;
