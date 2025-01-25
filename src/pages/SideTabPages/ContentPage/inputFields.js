const inputFields = [
  {
    name: "language",
    type: "dynamic_select",
    label: "Select Language",
    placeholder: "",
    options: [],
  },
  {
    name: "slug",
    type: "select",
    label: "Type",
    placeholder: "",
    options: [
      {
        value: "about-us",
        label: "ABOUT US",
      },
      {
        value: "privacy-policy",
        label: "PRIVACY POLICY",
      },
      {
        value: "terms-and-condition",
        label: "TERMS & CONDITIONS",
      },
    ],
  },
  {
    name: "title",
    type: "text ",
    label: "Title",
  },
  {
    name: "content",
    type: "ckeditor",
    label: "Content",
    placeholder: "",
  },
];

export default inputFields;
