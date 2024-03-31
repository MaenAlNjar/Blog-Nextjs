import "./login.css";
import LoginForm from "@/components/loginForm/page";
import { auth } from "@/lib/auth";
import { handleGithubLogin } from "@/lib/action";
const LoginPage = async () => {
  const session = await auth();

  return (
    <div className="flex items-center justify-center">
      <div className="w- w-96 bg-slate-600 p-12 flex flex-col items-center gap-8 rounded-md">
        <form action={handleGithubLogin}>
          <button className="w-full p-5 cursor-pointer bg-gray-950 text-white  font-bold  rounded-md">
            Login with Github
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
