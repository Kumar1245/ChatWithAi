import React from "react";

export default function Loading({ loading, className, children, ...props }) {
  return (
    <button disabled={loading} className={`${className}`} {...props}>
      {loading && <div className="btn-spinner loader-text text-primary" />}
      {children}
    </button>
  );
}
