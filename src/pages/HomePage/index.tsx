import React, { memo } from "react";
import "./style.css";
import { DynamicTable } from "../../components/DynamicTable";
import ErrorPage from "../../components/ErrorPage";
import Loading from "../../components/Loading";
import { useUsers } from "../../hooks/useUsers";

const HomePage: React.FC = () => {
  const { users, isRequest, error, deleteUser } = useUsers();
  
  return (
    <div>
      {!isRequest && !error && (
        <DynamicTable
          tableData={users}
          rowDelete={deleteUser}
          fields={[
            { text: "Id", value: "id" },
            { text: "Name", value: "name" },
            { text: "Email", value: "email" },
          ]}
        />
      )}
      {isRequest && <Loading />}
      {!isRequest && error && <ErrorPage />}
    </div>
  );
};

export default memo(HomePage);
