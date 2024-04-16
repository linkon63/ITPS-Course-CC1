import React from "react";
import AdminLayout from "../layout/AdminLayout";
import AllOrdersIndex from "./components/AllOrdersIndex";

export default function AdminOrder() {
  return (
    <div>
      <AdminLayout>
        <AllOrdersIndex />
      </AdminLayout>
    </div>
  );
}
