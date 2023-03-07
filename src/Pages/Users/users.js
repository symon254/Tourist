import React, { useState, useMemo, useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import DataTable from "../../Components/Table/TableData";
import Pagination from "../../Components/Table/Pagination";


const getData = () => {
  const data = [
    {
      userId: 1,
      firstName: "John",
      middleName: "Jacob",
      lastName: "Doe",
      username: "John Doe",
      email: "john@gmail.com",
      phoneNumber: "0712345678",
      alternatePhoneNumber: "0712345678",
      idNumber: "123456",
      idType: "National",
      gender: "Male",
      maritalStatus: "N/A",
      pinNo: "A123456789W",
      dateOfBirth: "2022-03-16T08:51:34.497Z",
      serviceCategory: "Public Servant",
      address: "1234",
      isActive: true,
      hasDisability: true,
      isOnReset: true,
      createdAt: "2022-03-16T08:51:34.497Z",
      modifiedAt: "2022-03-16T08:51:34.497Z",
      createdBy: "string",
      modifiedBy: "string",
      remarks: "string",
      lastSeenAt: "2022-03-16T08:51:34.497Z",
      profile: {
        mdaId: 1,
        payrollNo: "00345",
        jobGroup: "B",
        retirementYear: "2022-03-16T08:51:34.497Z",
        designation: "string",
        department: "string",
        dutyStation: "string",
        serviceTerms: "Contract",
      },
      roles: [
        {
          roleId: "string",
          role: "Admin",
          countyId: "string",
          county: "string",
        },
      ],
    },
    {
      userId: 2,
      firstName: "Triss",
      middleName: "Tracey",
      lastName: "Doe",
      username: "Triss Doe",
      email: "triss@gmail.com",
      phoneNumber: "0712345678",
      alternatePhoneNumber: "0712345678",
      idNumber: "R123456P",
      idType: "Passport",
      gender: "Female",
      maritalStatus: "N/A",
      pinNo: "A123456789W",
      dateOfBirth: "2022-03-16T08:51:34.497Z",
      serviceCategory: "Civil Servant",
      address: "1234",
      isActive: false,
      hasDisability: true,
      isOnReset: true,
      createdAt: "2022-03-16T08:51:34.497Z",
      modifiedAt: "2022-03-16T08:51:34.497Z",
      createdBy: "string",
      modifiedBy: "string",
      remarks: "string",
      lastSeenAt: "2022-03-16T08:51:34.497Z",
      profile: {
        mdaId: 2,
        payrollNo: "00345",
        jobGroup: "D",
        retirementYear: "2022-03-16T08:51:34.497Z",
        designation: "string",
        department: "string",
        dutyStation: "string",
        serviceTerms: "Contract",
      },
      roles: [
        {
          roleId: "string",
          role: "Director",
          countyId: "string",
          county: "string",
        },
      ],
    },
    {
      userId: 3,
      firstName: "Jane",
      middleName: "Janet",
      lastName: "Doe",
      username: "Jane Doe",
      email: "jane@gmail.com",
      phoneNumber: "0712345678",
      alternatePhoneNumber: "0712345678",
      idNumber: "T0032E3",
      idType: "Military",
      gender: "Female",
      maritalStatus: "N/A",
      pinNo: "A123456789W",
      dateOfBirth: "2022-03-16T08:51:34.497Z",
      serviceCategory: "National Police Service",
      address: "1234",
      isActive: true,
      hasDisability: true,
      isOnReset: true,
      createdAt: "2022-03-16T08:51:34.497Z",
      modifiedAt: "2022-03-16T08:51:34.497Z",
      createdBy: "string",
      modifiedBy: "string",
      remarks: "string",
      lastSeenAt: "2022-03-16T08:51:34.497Z",
      profile: {
        mdaId: 3,
        payrollNo: "00345",
        jobGroup: "F",
        retirementYear: "2022-03-16T08:51:34.497Z",
        designation: "string",
        department: "departmentA",
        dutyStation: "string",
        serviceTerms: "Contract",
      },
      roles: [
        {
          roleId: "1",
          role: "Director",
          countyId: "string",
          county: "string",
        },
      ],
    },
  ];
  return [
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
  ];
};

const Users = () => {
  const data = getData();


  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (page - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [data, page, pageSize]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "firstName",
        firstAccessor: "firstName",
        middleAccessor: "middleName",
        lastAccessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Contact",
        accessor: "phoneNumber",
      },
      {
        Header: "Department",
        accessor: "profile",
        Cell: ({ value, column, row }) => {
          return <span>{value.department}</span>;
        },
      },

      {
        Header: "role",
        accessor: "roles",
        Cell: ({ value, column, row }) => {
          return (
            <ul>
              {value.map((item) => (
                <li key={item}>{item.role}</li>
              ))}
            </ul>
          );
        },
      },
      {
        Header: "Status",
        accessor: "isActive",
      
      },

      {
        Header: "Action",
        accessor: "action",
        Cell: ({ value, column, row }) => {
          const id = row.original.userId;
          const name = row.original.firstName;
          return (
            <div className="flex items-center space-x-4">
              
             

              

              
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <main className="mt-4">
      {/* <SectionTitle>Buildings</SectionTitle> */}

      <DataTable
        columns={columns}
        data={currentTableData}
       
        Paging={
          <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 ">
            <div className="flex mt-2 sm:mt-auto sm:justify-end">
              <Pagination
                className="text-2xl"
                currentPage={page}
                totalCount={data.length}
                pageSize={pageSize}
                onPageChange={(e) => setPage(e)}
              />
            </div>
          </div>
        }
      />
    </main>
  );
};

export default Users;
