import RegisterForm from "@/components/registerForm/page";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-96 bg-slate-900 p-14 flex flex-col text-center gap-8 rounded-md">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
