import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";
import styles from "./common.module.scss";
import { useNavigate } from "react-router-dom";

export const CstmPagination = ({
  pageCount = 10,
  onPageChange,
  itemsPerPage = 7,
  totalItems = 100,
  currentPage = 1,
}) => {
  return (
    <div
      className={`${styles.cstmPagination} cstmPagination d-flex align-items-center flex-wrap justify-content-end gap-10`}
    >
      <div className="right d-flex align-items-center gap-10">
        <p className="m-0 fw-sbold text-dark">
          {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
            currentPage * itemsPerPage,
            totalItems
          )} of ${totalItems} items`}
        </p>
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={onPageChange}
          forcePage={currentPage - 1}
          containerClassName="pagination"
          activeClassName="active" 
          previousLabel="Prev"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="break-me"
          pageClassName="page-item"
          pageLinkClassName="page-link" 
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          disabledClassName="disabled"
        />
      </div>
    </div>
  );
};


export const Rating = ({ size }) => {
  return (
    <>
      <ul
        className={`${styles.rating} list-unstyled ps-0 mb-0 d-flex align-items-center`}
      >
        <li className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_22_5548)">
              <path
                d="M9.44071 14.5436C9.16931 14.3792 8.829 14.3792 8.55761 14.5437L4.39532 17.0665C3.75017 17.4575 2.95263 16.8789 3.12406 16.1443L4.22755 11.4153C4.29924 11.1081 4.19529 10.7864 3.95739 10.5792L0.293637 7.38862C-0.273874 6.8944 0.031211 5.96092 0.781053 5.89724L5.60934 5.48723C5.92375 5.46053 6.19766 5.26223 6.3212 4.97188L8.21605 0.518403C8.51015 -0.172801 9.48985 -0.172801 9.78395 0.518404L11.6788 4.97188C11.8023 5.26224 12.0762 5.46053 12.3907 5.48723L17.2189 5.89724C17.9688 5.96092 18.2739 6.8944 17.7064 7.38862L14.0426 10.5792C13.8047 10.7864 13.7008 11.1081 13.7725 11.4153L14.876 16.1446C15.0474 16.8792 14.25 17.4578 13.6048 17.0668L9.44071 14.5436Z"
                fill="#FFC500"
              />
            </g>
            <defs>
              <clipPath id="clip0_22_5548">
                <rect width="18" height="17.25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </li>
        <li className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_22_5548)">
              <path
                d="M9.44071 14.5436C9.16931 14.3792 8.829 14.3792 8.55761 14.5437L4.39532 17.0665C3.75017 17.4575 2.95263 16.8789 3.12406 16.1443L4.22755 11.4153C4.29924 11.1081 4.19529 10.7864 3.95739 10.5792L0.293637 7.38862C-0.273874 6.8944 0.031211 5.96092 0.781053 5.89724L5.60934 5.48723C5.92375 5.46053 6.19766 5.26223 6.3212 4.97188L8.21605 0.518403C8.51015 -0.172801 9.48985 -0.172801 9.78395 0.518404L11.6788 4.97188C11.8023 5.26224 12.0762 5.46053 12.3907 5.48723L17.2189 5.89724C17.9688 5.96092 18.2739 6.8944 17.7064 7.38862L14.0426 10.5792C13.8047 10.7864 13.7008 11.1081 13.7725 11.4153L14.876 16.1446C15.0474 16.8792 14.25 17.4578 13.6048 17.0668L9.44071 14.5436Z"
                fill="#FFC500"
              />
            </g>
            <defs>
              <clipPath id="clip0_22_5548">
                <rect width="18" height="17.25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </li>
        <li className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_22_5548)">
              <path
                d="M9.44071 14.5436C9.16931 14.3792 8.829 14.3792 8.55761 14.5437L4.39532 17.0665C3.75017 17.4575 2.95263 16.8789 3.12406 16.1443L4.22755 11.4153C4.29924 11.1081 4.19529 10.7864 3.95739 10.5792L0.293637 7.38862C-0.273874 6.8944 0.031211 5.96092 0.781053 5.89724L5.60934 5.48723C5.92375 5.46053 6.19766 5.26223 6.3212 4.97188L8.21605 0.518403C8.51015 -0.172801 9.48985 -0.172801 9.78395 0.518404L11.6788 4.97188C11.8023 5.26224 12.0762 5.46053 12.3907 5.48723L17.2189 5.89724C17.9688 5.96092 18.2739 6.8944 17.7064 7.38862L14.0426 10.5792C13.8047 10.7864 13.7008 11.1081 13.7725 11.4153L14.876 16.1446C15.0474 16.8792 14.25 17.4578 13.6048 17.0668L9.44071 14.5436Z"
                fill="#FFC500"
              />
            </g>
            <defs>
              <clipPath id="clip0_22_5548">
                <rect width="18" height="17.25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </li>
        <li className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_22_5554)">
              <path
                d="M9.44071 14.5436C9.16931 14.3792 8.829 14.3792 8.55761 14.5437L4.39532 17.0665C3.75017 17.4575 2.95263 16.8789 3.12406 16.1443L4.22755 11.4153C4.29924 11.1081 4.19529 10.7864 3.95739 10.5792L0.293637 7.38862C-0.273874 6.8944 0.031211 5.96092 0.781053 5.89724L5.60934 5.48723C5.92375 5.46053 6.19766 5.26223 6.3212 4.97188L8.21605 0.518403C8.51015 -0.172801 9.48985 -0.172801 9.78395 0.518404L11.6788 4.97188C11.8023 5.26224 12.0762 5.46053 12.3907 5.48723L17.2189 5.89724C17.9688 5.96092 18.2739 6.8944 17.7064 7.38862L14.0426 10.5792C13.8047 10.7864 13.7008 11.1081 13.7725 11.4153L14.876 16.1446C15.0474 16.8792 14.25 17.4578 13.6048 17.0668L9.44071 14.5436Z"
                fill="#E0E8F1"
              />
              <mask
                id="mask0_22_5554"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="18"
                height="18"
              >
                <path
                  d="M9.44071 14.5436C9.16931 14.3792 8.829 14.3792 8.55761 14.5437L4.39532 17.0665C3.75017 17.4575 2.95263 16.8789 3.12406 16.1443L4.22755 11.4153C4.29924 11.1081 4.19529 10.7864 3.95739 10.5792L0.293637 7.38862C-0.273874 6.8944 0.031211 5.96092 0.781053 5.89724L5.60934 5.48723C5.92375 5.46053 6.19766 5.26223 6.3212 4.97188L8.21605 0.518403C8.51015 -0.172801 9.48985 -0.172801 9.78395 0.518404L11.6788 4.97188C11.8023 5.26224 12.0762 5.46053 12.3907 5.48723L17.2189 5.89724C17.9688 5.96092 18.2739 6.8944 17.7064 7.38862L14.0426 10.5792C13.8047 10.7864 13.7008 11.1081 13.7725 11.4153L14.876 16.1446C15.0474 16.8792 14.25 17.4578 13.6048 17.0668L9.44071 14.5436Z"
                  fill="#E0E8F1"
                />
              </mask>
              <g mask="url(#mask0_22_5554)">
                <rect width="9" height="17.1907" fill="#FFC500" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_22_5554">
                <rect width="18" height="17.25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </li>
        <li className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_22_5548)">
              <path
                d="M9.44071 14.5436C9.16931 14.3792 8.829 14.3792 8.55761 14.5437L4.39532 17.0665C3.75017 17.4575 2.95263 16.8789 3.12406 16.1443L4.22755 11.4153C4.29924 11.1081 4.19529 10.7864 3.95739 10.5792L0.293637 7.38862C-0.273874 6.8944 0.031211 5.96092 0.781053 5.89724L5.60934 5.48723C5.92375 5.46053 6.19766 5.26223 6.3212 4.97188L8.21605 0.518403C8.51015 -0.172801 9.48985 -0.172801 9.78395 0.518404L11.6788 4.97188C11.8023 5.26224 12.0762 5.46053 12.3907 5.48723L17.2189 5.89724C17.9688 5.96092 18.2739 6.8944 17.7064 7.38862L14.0426 10.5792C13.8047 10.7864 13.7008 11.1081 13.7725 11.4153L14.876 16.1446C15.0474 16.8792 14.25 17.4578 13.6048 17.0668L9.44071 14.5436Z"
                fill="#E0E8F1"
              />
            </g>
            <defs>
              <clipPath id="clip0_22_5548">
                <rect width="18" height="17.25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </li>
      </ul>
    </>
  );
};
export function logOutRedirect(){
  let path= window.location.protocol+"//"+window.location.host+"/login" 
  window.location.href = path;
}
export function logOutRedirectCall(){
  localStorage.removeItem("user_token");
  localStorage.removeItem("authUser");
  logOutRedirect()
}
export const handleLogout = async () => {
  const navigate=useNavigate()
  try {
    localStorage.clear()
    toast.success("Logout Succesfully")
    navigate("/login");
  } catch (err) {
    console.log(err)

    if (err && err.data && err.data.message) {
      localStorage.clear()
      toast.error(err.data.message)
    }
  }
}