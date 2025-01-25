const inputFields = [
  {
    name: "language",
    type: "dynamic_select",
    label: "Select Language",
    placeholder: "",
    options: [],
  },
 
    {
      name: "question",
      type: "text ",
      label: "Questions",
      placeholder: "",
    },
    {
        name: "answer",
        type: "text ",
        label: "Answer",
        placeholder: "",
      },
      {
        name: "status",
        type: "select",
        label: "Status",
        placeholder: "",
        options: [
          {
            value: true,
            label: "Active ",
          },
          {
            value: false,
            label: "InActive",
          },
        ],
      },
 
  ];
  
  export default inputFields;
  