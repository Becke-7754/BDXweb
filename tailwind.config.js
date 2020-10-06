module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    opacity: {
      0: "0",
      20: ".2",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      80: ".8",
      90: ".9",
      100: "1",
    },
    cursor: {
      grab: "grab",
    },
    extend: {
      colors: {
        "primary-BDX": "#ff6900",
      },
      spacing: {
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        102: "26rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    display: ["responsive", "group-hover"],
  },
  plugins: [],
};
