import React, { useState, memo, useEffect } from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { uploadFile } from "../store/auth/actions";
import { Spinner } from "react-bootstrap";
import p1 from "../Assets/images/upld.png"
function DropZone(props) {
  const dispatch = useDispatch();
  const [imageFile, setimageFile] = useState({
    file: null,
    url: null,
    baseUrl: null,
  });
  const { uploadFilerLoader } = useSelector(({  Auth }) => ({
  
    uploadFilerLoader: Auth.uploadFilerLoader,
  }));

  const API_IMAGE_URL = process.env.REACT_APP_IMAGE_BASEURL;

  useEffect(() => {
    if (props.file) {
      // console.log("props", props.file)
      setimageFile((pre) => ({
        ...pre,
        url: props.file?.url,
        // baseUrl: props?.file?.baseUrl,
      }));
    }
  }, [props.file]);

  const handleFiles = (_files) => {
    const files = _files.filter((file) => file.size < 10e6);

    if (files.length < _files.length)
      return toast.error("Max file upload size is 5mb");

    const callback = (err, res) => {
      console.log(err, res, "<===err, res");
      if (err) {
        toast.error("Something went wrong on file upload!");
      } else {
        props.onChange({
          target: { value: res?.data?.url, baseUrl: res?.data?.baseUrl },
        });
        setimageFile((pre) => ({
          ...pre,
          baseUrl: res?.data?.baseUrl,
          url: res?.data?.url,
        }));
      }
    };
    dispatch(uploadFile({ data: files[0], callback }));

    // console.log(URL.createObjectURL(files[0]), "<===obj url");

    setimageFile((pre) => ({
      ...pre,
      file: files[0],
      url: URL.createObjectURL(files[0]),
      baseUrl: null,
    }));

    // console.log(URL.createObjectURL(files[0]), "<===URL.createObjectURL(files[0])");
  };
  console.log("image", imageFile?.url, imageFile?.url);
  return (
    <div>
      {imageFile.url && (
        <button
          onClick={() => {
            setimageFile({ file: "", url: "", baseUrl: "" });
            props?.setFieldValue && props.setFieldValue("imageUrl", "");
          }}
          type="button"
          className="border-0 bg-danger rounded-pill text-white p-0 bg-transparent position-absolute"
          style={{ top: -7, left: -5, height: 20, width: 20 }}
        >
          X
        </button>
      )}
      <Dropzone onDrop={handleFiles}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone-single-image avatar-xl" {...getRootProps()}>
            <input
              {...getInputProps()}
              id="formrow-profile-image-Input"
              multiple={false}
            />

            {props.children ? (
              props.children
            ) : imageFile?.file?.type?.includes("video") ||
              imageFile?.url?.includes("video") ? (
              <video
                width={"100%"}
                height={120}
                controls
                autoPlay={true}
                loop
                className="video_preview"
              >
                <source
                  src={
                    imageFile?.url &&imageFile?.url 
                  }
                  type={"video/mp4"}
                />
              </video>
            ) : (
              <>
                {uploadFilerLoader ? (
                  <div className="dropzone-spinner">
                    <Spinner
                      size="md"
                      style={{ color: "#7b6ee1 !important" }}
                    />
                  </div>
                ) : (
                  <>
                    <img
                      className="rounded avatar-xl"
                      alt={""}
                      src={
                        imageFile.url
                          ? imageFile.url
                          : `${p1}`
                      }
                      width={"150px"}
                      height={"150px"}
                    />

                    <div className="edit">
                      <i className="bx bx-pencil"></i>
                    </div>
                    <span className="icn position-absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.11125 13.125H8.88875C10.8394 13.125 11.815 13.125 12.5156 12.6657C12.8179 12.4675 13.0783 12.2118 13.2819 11.9132C13.75 11.2257 13.75 10.2675 13.75 8.35253C13.75 6.4369 13.75 5.4794 13.2819 4.7919C13.0783 4.49322 12.8179 4.23753 12.5156 4.0394C12.0656 3.74378 11.5019 3.63815 10.6387 3.60065C10.2269 3.60065 9.8725 3.2944 9.79187 2.89753C9.73026 2.60682 9.57017 2.3463 9.33865 2.16C9.10714 1.9737 8.81841 1.87303 8.52125 1.87503H6.47875C5.86125 1.87503 5.32937 2.30315 5.20812 2.89753C5.1275 3.2944 4.77312 3.60065 4.36125 3.60065C3.49875 3.63815 2.935 3.7444 2.48437 4.0394C2.18226 4.23757 1.92211 4.49326 1.71875 4.7919C1.25 5.4794 1.25 6.4369 1.25 8.35253C1.25 10.2675 1.25 11.225 1.71813 11.9132C1.92062 12.2107 2.18062 12.4663 2.48437 12.6657C3.185 13.125 4.16062 13.125 6.11125 13.125ZM7.5 5.79565C6.06187 5.79565 4.89562 6.94003 4.89562 8.3519C4.89562 9.7644 6.06187 10.9088 7.5 10.9088C8.93812 10.9088 10.1044 9.7644 10.1044 8.35253C10.1044 6.94003 8.93812 5.79565 7.5 5.79565ZM7.5 6.81815C6.6375 6.81815 5.9375 7.50503 5.9375 8.35253C5.9375 9.1994 6.6375 9.88628 7.5 9.88628C8.3625 9.88628 9.0625 9.1994 9.0625 8.35253C9.0625 7.50503 8.3625 6.81815 7.5 6.81815ZM10.4512 6.3069C10.4512 6.0244 10.6844 5.79565 10.9725 5.79565H11.6662C11.9537 5.79565 12.1875 6.0244 12.1875 6.3069C12.1862 6.44371 12.1306 6.57441 12.033 6.67027C11.9354 6.76613 11.8037 6.81932 11.6669 6.81815H10.9725C10.9047 6.81881 10.8374 6.80611 10.7746 6.78078C10.7117 6.75544 10.6544 6.71797 10.606 6.67049C10.5576 6.62302 10.519 6.56647 10.4925 6.50409C10.4659 6.4417 10.4519 6.3747 10.4512 6.3069Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
}

DropZone.propTypes = {
  file: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(DropZone);
