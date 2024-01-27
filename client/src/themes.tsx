import { extendTheme } from "@chakra-ui/react";

// INTERFACES
interface FloatingLabel {
  transform: string;
}

// CODE
const floatingLabel: FloatingLabel = {
  transform: "scale(0.85) translateY(-24px)",
};

export const inputTheme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...floatingLabel,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...floatingLabel,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});
