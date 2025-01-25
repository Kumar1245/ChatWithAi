import React, { useEffect, useState } from "react";
import {Col, Container,Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormikForm from "../../../components/shared/FormikForm";
import Validation from "./Valiadtion";
import inputFields from "./inputrfields";
import { getSettings, updateSettings } from "../../../store/settings/actions";
import FadeLoader from "react-spinners/FadeLoader";
const Setting = ({ submitting, loader }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [settingData, setSettingData] = useState();
  const {settings,loading}=useSelector((state)=>state.Setting)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const dispatch = useDispatch();
  const initialValues = {
    wordsPerToken: settingData?.tokenSetting?.wordsPerToken,
    imageTokenRate: settingData?.tokenSetting?.imageTokenRate,
    allowCustomPricing: settingData?.tokenSetting?.allowCustomPricing,
    minTokenPrice: settingData?.tokenSetting?.minTokenPrice,
    maxTokenPrice: settingData?.tokenSetting?.maxTokenPrice,
    tokenRevenueShare: settingData?.tokenSetting?.tokenRevenueShare,
  };
  const fetchData = async () => {
    try {
      const callback = (err, res) => {
        if (err) {
          toast.error(err);
        } else {
          setSettingData(res);
        }
      };
      dispatch(getSettings({ callback }));
    } catch (error) {
      console.error(error, "<===err");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const updateProfileSubmit_ = async (values) => {
    try {
      let query = {
        tokenSetting: {
          wordsPerToken: values?.wordsPerToken,
          imageTokenRate: values?.imageTokenRate,
          allowCustomPricing: values?.allowCustomPricing,
          minTokenPrice: values?.minTokenPrice,
          maxTokenPrice: values?.maxTokenPrice,
          tokenRevenueShare: values?.tokenRevenueShare,
        },
      };
      const callBack = (err, res) => {
        if (err) {
          console.log("Callback error:", err);
          toast.error(err);
        } else {
          fetchData();
          console.log("Callback success:", res);
          toast.success("Setting Updated successfully");
        }
      };
      dispatch(updateSettings({ data: query, callback: callBack }));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(settingData ,settings, "profileData------");
  return (
    <>
     {loading && (
        <div className="main-loader">
          <FadeLoader size={1000} />
        </div>
      )}
      <section className={` myProfile position-relative`}>
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="cardCstm p-3 pt-0 rounded">
                <div className="section-body">
                  <h6 className="section-title">Basic Token Settings</h6>

                  <div className="row mt-sm-4">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <FormikForm
                            initialValues={initialValues}
                            validationSchema={Validation}
                            onSubmit={updateProfileSubmit_}
                            // loading={loading}
                            inputFields={inputFields}
                            submitting={submitting}
                            buttonText="Update setting"
                            is_block={false}
                            col={6}
                            imageRemoveButton={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Setting;
