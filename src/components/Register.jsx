
import React from "react";
import { NavLink } from "react-router-dom";
const Register =() => {
    return(
        <div>
            <h2>Kayıt OL</h2>
            <form>
            <div>
                    <label>Ad Soyad:</label>
                    <input type="text"name="fullName"required/>

            </div>
                <div>
                    <label>E-Posta:</label>
                    <input type="emil"name="email"required/>

                </div>
                <div>
                <label>Şifre:</label>
                <input type="password"name="password"required/>
                </div>
                <button type="submit">Kayıt Ol</button>
                <p><NavLink to="/login">Giriş Yap</NavLink></p>
                </form>
            </div>
        
    );
};

export default Register;
