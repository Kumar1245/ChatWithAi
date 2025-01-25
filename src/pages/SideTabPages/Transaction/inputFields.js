const inputFields = [
    {
        name: "type",
        type: "select",
        label: "Modal Type",
        placeholder: "Select Modal Type",
        options: [
          {
            value: "Ethnicity",
            label: "Ethencity ",
          },
          {
            value:"Style",
            label: "Style",
          },
          {
            value:"Breast",
            label: "Breast",
          },
          {
            value:"Butt",
            label: "Butt",
          },
          {
            value:"Accent",
            label: "Accent",
          },
        ],
      },
  
    {
      name: "name",
      type: "text",
      label: "Modal Name*",
      placeholder: "Enter modal Name",
    },
    {
      name: "image",
      type: "image",
      label: "Modal Image*",
      placeholder: "",
    },
    
  ];
  
  export default inputFields;
  