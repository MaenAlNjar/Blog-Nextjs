import { Suspense } from "react";
import AdminPost from "../../components/adminPost/page";
import AdminPostForm from "@/components/adminUserForm/page";
import AdminUser from "../../components/adminUser/page";
import AdminUserForm from "@/components/adminUserForm/page";
import { auth } from "@/lib/auth";
import "./admin.css";
const AdminPage = async () => {
  const session = await auth();

  return (
    <div className="mt-12">
      <div className="flex gap-20">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPost />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className="row">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUser />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
