import { updateToken } from "./api_helper";

import moment from "moment";

export function DATE_FORMAT(inputDate) {
  const formattedDate = moment(inputDate).format("YYYY-MM-DD HH:mm:ss");
  return formattedDate;
}

export function FORMAT_TEXT(text) {
  const text_ = text?.length > 20 ? text?.substring(0, 20) + "..." : text;
  return text_;
}

export function FORMAT_TEXT_Temp(text) {
  const text_ = text?.length > 40 ? text?.substring(0, 40) + "..." : text;
  return text_;
}

export function convertTimestampToDate(timestamp, days) {
  const originalDate = new Date(timestamp);
  const newDate = new Date(originalDate);
  newDate.setDate(newDate.getDate() + days);
  const year = newDate.getFullYear();
  const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
  const day = newDate.getDate().toString().padStart(2, "0");
  return `${day}-${month}-${year}`;
}

export function formatTimestamp(timestamp, timeZone) {
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: timeZone,
  };
  return date.toLocaleString("en-US", options);
}

export function IS_BASE64(input) {
  try {
    const base64Data = input.split(",")[1];
    return btoa(atob(base64Data)) === base64Data;
  } catch (e) {
    return false;
  }
}

export function updateAdminToken(token) {
  updateToken(token);
}

export function downloadSVGFromS3(s3Link, filename) {
  const anchor = document.createElement("a");
  anchor.href = s3Link;
  anchor.download = filename;

  document.body.appendChild(anchor);

  anchor.click();

  document.body.removeChild(anchor);
}

export const downloadFile = (url, filename) => {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => console.error("Error downloading file:", error));
};



// calculate age in month and year 
export function calculateAge(decimalNumber) {
  try {
    if (
      typeof decimalNumber !== "number" ||
      isNaN(decimalNumber) ||
      decimalNumber < 0
    ) {
      console.error("Invalid input. Please provide a non-negative number.");
      return;
    }
    // Get the integer part (years)
    var years = Math.floor(decimalNumber);
    // Get the decimal part (remaining months)
    var remainingMonths = (decimalNumber - years) * 12;
    var months = Math.round(remainingMonths);
    return {
      years: years,
      months: months,
    };
  } catch (e) {
    return;
  }
}

export function formatYearsAndMonths(data) {
  try {
    const { years, months } = data;
    // if (years === 0 && months === 0) {
    //     return "0"; // Return nothing if both years and months are 0
    // }
    if (years === 0 && months > 0) {
      result += `${months}${months > 1 ? translate("months") : translate("month")}`;
    }
    let result = "";
    if (years > 0) {
      result += `${years} year${years > 1 ? "s" : ""}`;
    }
    if (months > 0) {
      if (years > 0) {
        result += " ";
      }
      result += `${months} month${months > 1 ? "s" : ""}`;
    }
    return result;
  } catch (error) {
    console.error("Error occurred while formatting years and months:", error);
    return ""; // Return empty string in case of error
  }
}

export const DEFAULT_COUNTY_CODE = "ge";
export const DEFAULT_COUNTRY_PHONE_CODE = "995";