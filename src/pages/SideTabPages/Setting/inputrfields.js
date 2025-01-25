const inputFields = [
  {
    name: "wordsPerToken",
    type: "number",
    label: " WordsPerToken*",
    placeholder: "Enter words per token",
  },
  {
    name: "minTokenPrice",
    type: "number",
    label: "Min token Price*",
    placeholder: "Enter Min token price",
  },
  {
    name: "maxTokenPrice",
    type: "number",
    label: "Max token Price*",
    placeholder: "Enter Max token Price",
  },
  {
    name: "imageTokenRate",
    type: "number",
    label: "Image Token Rate *",
    placeholder: "Enter image token Rate",
  },
  {
    name: "allowCustomPricing",
    type: "select",
    label: "Allow  Custom Pricing*",
    placeholder: "Select an Option",
    options: [
      { value: true, label: "True" },
      { value: false, label: "False" },
    ],
  },
  {
    name: "tokenRevenueShare",
    type: "number",
    label: "Token Revenue Share*",
    placeholder: "Enter Revenue share",
  },
];

export default inputFields;
