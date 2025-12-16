"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";
import { login, register } from "../../../api/login.api";
import { useRouter } from "next/navigation";
import { Notyf } from "notyf";
import LoadingSpinner from "../../../components/Spinner";

export default function LoginRegister() {
  const [isActive, setIsActive] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });

  const router = useRouter();
  const notyf = new Notyf();

  const isLoginValid = () => {
    return loginData.email && loginData.password;
  };

  const isRegisterValid = () => {
    return (
      registerData.name &&
      registerData.email &&
      registerData.password &&
      registerData.type
    );
  };

const doLogin = async (event: FormEvent<HTMLButtonElement>) => {
  event.preventDefault();

  if (!isLoginValid()) {
    notyf.error("Preencha e-mail e senha.");
    return;
  }

  setIsLoading(true);

  try {
    const { data } = await login(loginData);

    localStorage.setItem("token", data.token);

    notyf.success("Login realizado com sucesso!");
    router.push("/");
  } catch (error: any) {
    notyf.error(
      error?.response?.data?.message ||
        "Erro ao realizar login. Verifique suas credenciais."
    );
  } finally {
    setIsLoading(false);
  }
};

  const doRegister = async (event: FormEvent<HTMLButtonElement>) => {
  event.preventDefault();

  if (!isRegisterValid()) {
    notyf.error("Preencha todos os campos.");
    return;
  }

  setIsLoading(true);

  try {
    const { data } = await register(registerData);

    // 🔹 salva dados vindos do backend
    localStorage.setItem(
      "user_profile",
      JSON.stringify({
        nomeCompleto: data.name,
        email: data.email,
        ocupacao: data.type,
        linkedin: "",
        github: "",
        sobreMim: "",
      })
    );

    notyf.success("Cadastro realizado com sucesso!");

    setRegisterData({
      name: "",
      email: "",
      password: "",
      type: "",
    });

    setIsActive(false);
    setShowLogin(true);
  } catch (error: any) {
    notyf.error(
      error?.response?.data?.message || "Erro ao realizar cadastro."
    );
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className={styles.loginPage}>
      <div className={`${styles.container} ${isActive ? styles.active : ""}`}>

        {/* LOGIN */}
        {showLogin && (
          <div className={`${styles.formBox} ${styles.login}`}>
            <form>
              <h1>Login</h1>

              <div className={styles.inputBox}>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  required
                />
                <img
                  className={styles.icon}
                  src="/icons/iconProfile.png"
                  alt="Icon Profile"
                />
              </div>

              <div className={styles.inputBox}>
                <input
                  type="password"
                  placeholder="Senha"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                />
                <img
                  className={styles.icon}
                  src="/icons/iconPassWord.png"
                  alt="Icon PassWord"
                />
              </div>

              <div className={styles.forgotLink}>
                <a href="#">Esqueceu a sua senha?</a>
              </div>

              <button
                type="submit"
                className={styles.btn}
                onClick={doLogin}
                disabled={isLoading}
              >
                {isLoading ? <LoadingSpinner /> : "Entrar"}
              </button>
            </form>
          </div>
        )}

        {/* REGISTER */}
        {!showLogin && (
          <div className={`${styles.formBox} ${styles.register}`}>
            <form>
              <h1>Cadastre-se</h1>

              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Nome"
                  value={registerData.name}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, name: e.target.value })
                  }
                  required
                />
                <img
                  className={styles.icon}
                  src="/icons/iconProfile.png"
                  alt="Icon Profile"
                />
              </div>

              <div className={styles.inputBox}>
                <input
                  type="email"
                  placeholder="Email"
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                  required
                />
                <img
                  className={styles.icon}
                  src="/icons/iconEmail.png"
                  alt="Icon Email"
                />
              </div>

              <div className={styles.inputBox}>
                <input
                  type="password"
                  placeholder="Senha"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                  required
                />
                <img
                  className={styles.icon}
                  src="/icons/iconPassWord.png"
                  alt="Icon PassWord"
                />
              </div>

              <div className={styles.inputBox}>
                <select
                  value={registerData.type}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      type: e.target.value,
                    })
                  }
                  required
                >
                  <option value="" disabled>
                    Ocupação
                  </option>
                  <option value="ALUNO">Aluno</option>
                  <option value="PROFESSOR">Docente</option>
                  <option value="EGRESSO">Egresso</option>
                  <option value="COORDENADOR">Coordenador</option>
                </select>
              </div>

              <button
                type="submit"
                className={styles.btn}
                onClick={doRegister}
                disabled={isLoading}
              >
                {isLoading ? <LoadingSpinner /> : "Concluir"}
              </button>
            </form>
          </div>
        )}

        {/* TOGGLE */}
        <div className={styles.toggleBox}>
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Boas vindas!</h1>
            <p>Ainda não tem uma conta?</p>
            <button
              className={styles.btnOutiline}
              onClick={() => {
                setIsActive(true);
                setShowLogin(false);
              }}
            >
              Cadastrar-se
            </button>
          </div>

          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>Boas vindas!</h1>
            <p>Já tem conta?</p>
            <button
              className={styles.btnOutiline}
              onClick={() => {
                setIsActive(false);
                setShowLogin(true);
              }}
            >
              Entrar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
