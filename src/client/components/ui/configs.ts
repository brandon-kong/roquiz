export type FontWeight = "Regular" | "Medium" | "SemiBold" | "Bold";

type Color = {
    foreground: Color3;
    background: Color3;
    active: Color3;
    accent: Color3;
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

const configs = {
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
            active: Color3.fromRGB(140, 87, 87),
            accent: Color3.fromRGB(227, 227, 227),
        },
        accent: {
            foreground: Color3.fromRGB(255, 255, 255),
            background: Color3.fromRGB(41, 112, 173),
            active: Color3.fromRGB(33, 94, 145),
            accent: Color3.fromRGB(138, 138, 138),
        },
        secondary: {
            foreground: Color3.fromRGB(0, 0, 0),
            background: Color3.fromRGB(230, 230, 230),
            active: Color3.fromRGB(219, 219, 219),
            accent: Color3.fromRGB(0, 0, 0),
        },
        white: {
            foreground: Color3.fromRGB(0, 0, 0),
            background: Color3.fromRGB(255, 255, 255),
            active: Color3.fromRGB(230, 230, 230),
            accent: Color3.fromRGB(138, 138, 138),
        },
        black: {
            foreground: Color3.fromRGB(255, 255, 255),
            background: Color3.fromRGB(0, 0, 0),
            active: Color3.fromRGB(30, 30, 30),
            accent: Color3.fromRGB(156, 156, 156),
        },
        destructive: {
            foreground: Color3.fromRGB(255, 255, 255),
            background: Color3.fromRGB(255, 0, 0),
            active: Color3.fromRGB(200, 0, 0),
            accent: Color3.fromRGB(255, 255, 255),
        },

        gameRed: {
            foreground: Color3.fromRGB(255, 255, 255),
            background: Color3.fromRGB(227, 26, 60),
            active: Color3.fromRGB(194, 23, 51),
            accent: Color3.fromRGB(255, 255, 255),
        },
        gameBlue: {
            foreground: Color3.fromRGB(255, 255, 255),
            background: Color3.fromRGB(19, 104, 206),
            active: Color3.fromRGB(18, 89, 176),
            accent: Color3.fromRGB(255, 255, 255),
        },
        gameYellow: {
            foreground: Color3.fromRGB(255, 255, 255),
            background: Color3.fromRGB(216, 158, 2),
            active: Color3.fromRGB(204, 158, 0),
            accent: Color3.fromRGB(255, 255, 255),
        },
        gameGreen: {
            foreground: Color3.fromRGB(255, 255, 255),
            background: Color3.fromRGB(39, 137, 13),
            active: Color3.fromRGB(33, 112, 10),
            accent: Color3.fromRGB(255, 255, 255),
        },
    },
    gameShapes: {
        circle: "rbxassetid://9266750641",
        square: "rbxassetid://9266736698",
        triangle: "rbxassetid://9266744542",
        diamond: "rbxassetid://9266748671",
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
};

export default configs;

export type ColorToken = keyof typeof configs.colors;
