import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SUBSCRIPTIONADD } from "../../../../store/subscription/actions";
import { getAllLanguage } from "../../../../store/language/actions";
import { toast } from "react-toastify";
import FadeLoader from "react-spinners/FadeLoader";
import { useNavigate } from "react-router-dom";

const AddSubscription = () => {
  const { loading } = useSelector((state) => state.Subscription);
  const dispatch = useDispatch();
  const [language, setLanguage] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    language: "",
    words: 0,
    wordsInterval: "",
    aiCharacterAccess: "",
    nsfwContent: false,
    chatHistory: false,
    characterCustomization: "",
    publicAICharacters: 0,
    voiceInteractions: false,
    badge: "",
    description: "",
    benifits: [""],
    stripePriceId: "",
    increaseMessage: false,
  });

  const fetchLanguages = async () => {
    try {
      const callback = (err, res) => {
        if (err) {
          toast.error(err);
          console.log(err, "callback");
        } else {
          setLanguage(res);
        }
      };
      dispatch(getAllLanguage({ callback }));
    } catch (error) {
      console.error(error, "<===err");
    }
  };
  useEffect(() => {
    fetchLanguages();
  }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlebenifitsChange = (index, value) => {
    const newbenifits = [...formData.benifits];
    newbenifits[index] = value;
    setFormData({ ...formData, benifits: newbenifits });
  };
  const addbenifits = () => {
    setFormData({
      ...formData,
      benifits: [...formData.benifits, ""],
    });
  };
  const removebenifits = (index) => {
    const newbenifits = formData.benifits.filter((_, i) => i !== index);
    setFormData({ ...formData, benifits: newbenifits });
  };

  const handleSubmit_ = (info) => {
    try {
      const callback = (err, res) => {
        if (err) {
          console.error(err, "error message");
          toast.error(err);
        } else {
          console.log(res);
          toast.success("Plan Added successfully");
          navigate("/subscription-plan");
          setFormData({
            language: "",
            words: 0,
            wordsInterval: "day",
            aiCharacterAccess: "",
            nsfwContent: "",
            chatHistory: "",
            characterCustomization: "",
            publicAICharacters: 0,
            voiceInteractions: "",
            badge: "",
            description: "",
            benifits: [""],
            stripePriceId: "",
            increaseMessage: "",
          });
        }
      };
      dispatch(
        SUBSCRIPTIONADD({
          data: info,
          callback,
        })
      );
    } catch (error) {
      console.error(error, "<===err");
    }
  };

  return (
    <>
      {loading && (
        <div className="main-loader">
          <FadeLoader size={1000} />
        </div>
      )}
      <section className="addForm position-relative py-3">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="cardCstm p-3 rounded bg-white">
                <Form
                  className="mx-auto"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit_(formData);
                  }}
                >
                  <div className="py-3">
                    <div className="topHead pb-2">
                      <h5 className="m-0 fw-sbold" style={{ color: "#2E3A59" }}>
                        Add Subscription:
                      </h5>
                    </div>
                    <div className="mx-auto" style={{ maxWidth: 777 }}>
                      <Row className="justify-content-center">
                        {/* Words Interval */}
                        <Col md="6" className="my-2 ">
                          <label
                            htmlFor="wordsInterval"
                            className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                          >
                            Select Language
                          </label>
                          <select
                            className="form-control"
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                          >
                            <option value="">Select Language</option>
                            {Array.isArray(language) &&
                              language?.map((lang, index) => (
                                <option key={index} value={lang?._id}>
                                  {lang?.name}
                                </option>
                              ))}
                          </select>
                        </Col>
                        {/* Words */}
                        <Col md="6" className="my-2 ">
                          <label
                            htmlFor="words"
                            className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                          >
                            Words
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="words"
                            value={formData.words}
                            onChange={handleChange}
                          />
                        </Col>

                        {/* Words Interval */}
                        <Col md="6" className="my-2 ">
                          <label
                            htmlFor="wordsInterval"
                            className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                          >
                            Words Interval
                          </label>
                          <select
                            className="form-control"
                            name="wordsInterval"
                            value={formData.wordsInterval}
                            onChange={handleChange}
                          >
                            <option value="">Select Words Interval</option>
                            <option value="day">Day</option>
                            <option value="month">Month</option>
                          </select>
                        </Col>

                        {/* AI Character Access */}
                        <Col md="6" className="my-2 ">
                          <label
                            htmlFor="aiCharacterAccess"
                            className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                          >
                            AI Character Access
                          </label>
                          <select
                            className="form-control"
                            name="aiCharacterAccess"
                            value={formData.aiCharacterAccess}
                            onChange={handleChange}
                          >
                            <option value="">Select Character Access</option>
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                            <option value="advanced">Advanced</option>
                          </select>
                        </Col>
                        {/* Character Customization */}
                        <Col md="6" className="my-2 ">
                          <label
                            htmlFor="characterCustomization"
                            className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                          >
                            Character Customization
                          </label>
                          <select
                            className="form-control"
                            name="characterCustomization"
                            value={formData.characterCustomization}
                            onChange={handleChange}
                          >
                            <option value="">
                              Select Character Customization
                            </option>
                            <option value="none">None</option>
                            <option value="basic">Basic</option>
                            <option value="full">Full</option>
                          </select>
                        </Col>

                        {/* Public AI Characters */}
                        <Col md="6" className="my-2 ">
                          <label
                            htmlFor="publicAICharacters"
                            className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                          >
                            Public AI Characters
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="publicAICharacters"
                            value={formData.publicAICharacters}
                            onChange={handleChange}
                          />
                        </Col>

                        {/* Public AI Characters */}
                        <Col md="6" className="my-2 ">
                          <label
                            htmlFor="description"
                            className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                          >
                            Description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Badge */}
                        <Col md="6" className="my-2 ">
                          <label
                            htmlFor="badge"
                            className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                          >
                            Badge
                          </label>
                          <select
                            className="form-control"
                            name="badge"
                            value={formData.badge}
                            onChange={handleChange}
                          >
                            <option value="">Select Badge Level</option>
                            <option value="None">None</option>
                            <option value="Gold-level">Gold-level</option>
                            <option value="Bronze-level">Bronze-level</option>
                            <option value="Silver-level">Silver-level</option>
                          </select>
                        </Col>
                        <Col md="12" className="my-2 ">
                          <label
                            htmlFor="stripePriceId"
                            className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                          >
                            Stripe Price Ids
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="stripePriceId"
                            value={formData.stripePriceId}
                            onChange={handleChange}
                          />
                        </Col>
                        <Col lg="12">
                          <Row>
                            <Col md="6" className="my-2 ">
                              <div className="d-flex align-items-center gap-10">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="nsfwContent"
                                  checked={formData.nsfwContent}
                                  onChange={handleChange}
                                  style={{
                                    marginTop: -5,
                                    height: 20,
                                    width: 20,
                                  }}
                                />
                                <label
                                  htmlFor="nsfwContent"
                                  className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                                >
                                  NSFW Content
                                </label>
                              </div>
                            </Col>
                            {/* Voice Interactions */}
                            <Col md="6" className="my-2 ">
                              <div className="d-flex align-items-center gap-10">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="increaseMessage"
                                  checked={formData.increaseMessage}
                                  onChange={handleChange}
                                  style={{
                                    marginTop: -5,
                                    height: 20,
                                    width: 20,
                                  }}
                                />
                                <label
                                  htmlFor="increaseMessage"
                                  className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                                >
                                  Increase Message
                                </label>
                              </div>
                            </Col>
                            {/* Voice Interactions */}
                            <Col md="6" className="my-2 ">
                              <div className="d-flex align-items-center gap-10">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="voiceInteractions"
                                  checked={formData.voiceInteractions}
                                  onChange={handleChange}
                                  style={{
                                    marginTop: -5,
                                    height: 20,
                                    width: 20,
                                  }}
                                />
                                <label
                                  htmlFor="voiceInteractions"
                                  className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                                >
                                  Voice Interactions
                                </label>
                              </div>
                            </Col>

                            {/* Chat History */}
                            <Col md="6" className="my-2 ">
                              <div className="d-flex align-items-center gap-10">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="chatHistory"
                                  checked={formData.chatHistory}
                                  onChange={handleChange}
                                  style={{
                                    marginTop: -5,
                                    height: 20,
                                    width: 20,
                                  }}
                                />
                                <label
                                  htmlFor="chatHistory"
                                  className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                                >
                                  Chat History
                                </label>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        {/* NSFW Content */}

                        <Col md="12" className="my-2">
                          <label
                            htmlFor="benifits"
                            className="form-label text-dark m-0 pb-1 fw-sbold text-uppercase"
                          >
                            Benifits
                          </label>
                          {formData.benifits.map((desc, index) => (
                            <div
                              key={index}
                              className="d-flex align-items-center mb-2"
                            >
                              <input
                                type="text"
                                className="form-control me-2"
                                value={desc}
                                onChange={(e) =>
                                  handlebenifitsChange(index, e.target.value)
                                }
                              />
                              <Button
                                variant="danger"
                                className="btn-sm"
                                onClick={() => removebenifits(index)}
                                disabled={formData.benifits.length === 1}
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                          <Button className="mt-2 btn-sm" onClick={addbenifits}>
                            Add More
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="py-3">
                    <div className="mx-auto" style={{ maxWidth: 777 }}>
                      <Row>
                        <Col md="5" className="my-2 ">
                          <Button
                            className="d-flex align-items-center justify-content-center commonBtn w-100 fw-sbold"
                            type="submit"
                          >
                            Submit
                          </Button>
                        </Col>
                        {/* <Col md="5" className="my-2 ">
                          <Button className="d-flex align-items-center justify-content-center commonBtn borderedBtn w-100 bg-transparent themeClr fw-sbold">
                            Cancel
                          </Button>
                        </Col> */}
                      </Row>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AddSubscription;
