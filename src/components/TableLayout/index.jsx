import React from "react";
// css
import styles from "./Table.module.scss";
import { CstmPagination } from "../Common/Common";
const TableLayout = ({
  column,
  data,
  totalCount,
  limit,
  handlePageChange,
  pageNo,
  status,
}) => {
  return (
    <>
      <div className="table-responsive border rounded">
        <table className={`${styles.table} table`}>
          <thead>
            <tr className="">
              {column &&
                column.length > 0 &&
                column.map((item, key) => (
                  <>
                    <th
                      className={`${
                        status === "status" && item.head === "Status"
                          ? "d-flex justify-content-center align-items-center"
                          : ""
                      }`}
                    >
                      {item.head}
                    </th>
                  </>
                ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.length > 0 &&
              data.map((data, columnkey) => {
                return (
                  <tr>
                    {column &&
                      column.length > 0 &&
                      column.map((item, key) => {
                        if (item.component) {
                          return (
                            <td className=" fw-sbold">
                              {item.component(data, columnkey, data)}
                            </td>
                          );
                        }

                        return (
                          <td className=" fw-sbold">{data[item?.accessor]}</td>
                        );
                      })}
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="d-flex justify-content-end px-2 py-2">
          <CstmPagination
            pageCount={Math.ceil(totalCount / limit)}
            onPageChange={handlePageChange}
            itemsPerPage={limit}
            totalItems={totalCount}
            currentPage={pageNo}
          />
        </div>
      </div>
    </>
  );
};

export default TableLayout;
