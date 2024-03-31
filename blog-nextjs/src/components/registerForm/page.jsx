"use client";

import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import './registerForm.css'
const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className='form' action={formAction}>
      <input type="text" placeholder="username" name="username" className="formInput"/>
      <input type="email" placeholder="email" name="email" className="formInput"/>
      <input type="password" placeholder="password" name="password" className="formInput"/>
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
        className="formInput"
      />
      <button className="formButton">Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;