import { SignInForm } from "../components/SignInForm";
import { SignUpForm } from "../components/SignUpForm";
import { useLocation } from "react-router-dom";

export const SignPage = () => {
  const { pathname } = useLocation();
  return (
    <section className="relative w-full mb-[70px] mt-[50px]">
      <div className="z-[-1] absolute w-[700px] h-[400px] bg-theme-yellow right-0 top-[-50px]"></div>
      <div className="z-[-1] absolute w-[650px] h-[300px] bg-theme-blue mr-0 left-0 top-[300px]"></div>
      {pathname === "/signIn" ? <SignInForm /> : <SignUpForm />}
    </section>
  );
};
