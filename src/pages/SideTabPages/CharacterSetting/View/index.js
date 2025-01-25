import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { toast } from "react-toastify";

const CharacterView = ({ submitting, loader }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [profileData, setProfileData] = useState();


  const fetchData = async () => {
    try {
      const callback = (err, res) => {
        if (err) {
          toast.error(err);
        } else {
          setProfileData(res);
          toast.success(res.data.message);
        }
      };
      dispatch(ProfileView({ callback }));
    } catch (error) {
      console.error(error, "<===err");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
 

  return (
    <>
      <section className={` myProfile position-relative`}>
        <div className="top">
          {/* <img src={p1} alt="" className="img-fluid w-100 object-fit-cover" /> */}
        </div>
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="cardCstm p-3 pt-0 rounded">
                <div className="section-body">
                

                  <div className="row mt-sm-4">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                        
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

export default CharacterView;
