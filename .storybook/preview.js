export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#F2F2F2;",
      },
      {
        name: "dark",
        value: "#2B2C37",
      },
    ],
  },
};

// argTypes: {
//   variant: {
//     options: ['dark', 'light'],
//     control: { type: 'radio' },
//   },
// };

// preview.js

// All stories expect a theme arg
export const argTypes = {
  variant: { options: ["light", "dark"], control: "radio" },
};

// The default value of the theme arg to all stories
export const args = { variant: "light" };

// argTypes: {

//   variant: {
//     options: ['dark', 'light'],
//     control: { type: 'radio' },
//   },
// },
