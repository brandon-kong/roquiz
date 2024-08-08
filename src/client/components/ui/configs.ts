export type FontWeight = "Regular" | "Medium" | "SemiBold" | "Bold";

type Color = {
    foreground: Color3;
    background: Color3;
    active?: Color3;
};

type SizeToken = "xs" | "sm" | "md" | "lg" | "xl";

type Configs = {
    colors: {
        [token: string]: Color;
    };
    fonts: {
        [font: string]: {
            [weight in FontWeight]: Font;
        };
    };
    rounded: {
        [size in SizeToken]: number;
    };
    textSize: {
        [size in SizeToken]: number;
    };
    weights: {
        [weight in FontWeight]: FontWeight;
    };
};

export default {
    textSize: {
        xs: 14,
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
    },
    rounded: {
        xs: 2,
        sm: 4,
        md: 8,
        lg: 16,
        xl: 32,
    },
    colors: {
        primary: {
            foreground: new Color3(1, 1, 1),
            background: Color3.fromRGB(0, 0, 0),
            active: Color3.fromRGB(30, 30, 30),
        },
        secondary: {
            foreground: Color3.fromRGB(0, 0, 0),
            background: Color3.fromRGB(230, 230, 230),
            active: Color3.fromRGB(200, 200, 200),
        },
        white: {
            foreground: Color3.fromRGB(0, 0, 0),
            background: Color3.fromRGB(255, 255, 255),
            active: Color3.fromRGB(230, 230, 230),
        },
        destructive: {
            foreground: Color3.fromRGB(255, 255, 255),
            background: Color3.fromRGB(255, 0, 0),
            active: Color3.fromRGB(200, 0, 0),
        },
    },
    weights: {
        Regular: "Regular",
        Medium: "Medium",
        SemiBold: "SemiBold",
        Bold: "Bold",
    },
    fonts: {
        Inter: {
            Regular: Font.fromName("Inter", Enum.FontWeight.Regular),
            Medium: Font.fromName("Inter", Enum.FontWeight.Medium),
            SemiBold: Font.fromName("Inter", Enum.FontWeight.SemiBold),
            Bold: Font.fromName("Inter", Enum.FontWeight.Bold),
        },
    },
} as Configs;
