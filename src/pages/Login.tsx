import { useEffect, useState } from "react";
import Input from "../components/Input";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (email && password) {
      login(email, password);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className="m-10 py-10 p-20 bg-dark-1 h-hero">
      <PageNav />
      <form className="bg-dark-2 rounded-lg py-8 px-12 w-[48rem] flex flex-col gap-8 my-32 mx-auto">
        <div className="flex flex-col gap-2">
          <label
            className="text-2xl font-semibold"
            htmlFor="email"
          >
            Email address
          </label>
          <Input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-2xl font-semibold"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button onClick={handleLogin} type="primary">
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
