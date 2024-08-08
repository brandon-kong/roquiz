export type FontWeight = "Regular" | "Medium" | "SemiBold" | "Bold";

type Color = {
    foreground: Color3;
    background: Color3;
    active?: Color3;
};

type Configs = {
    colors: {
        [token: string]: Color;
    };
    fonts: {
        [font: string]: {
            [weight in FontWeight]: Font;
        };
    };
};

export default {
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

    fonts: {
        Inter: {
            Regular: Font.fromName("Inter", Enum.FontWeight.Regular),
            Medium: Font.fromName("Inter", Enum.FontWeight.Medium),
            SemiBold: Font.fromName("Inter", Enum.FontWeight.SemiBold),
            Bold: Font.fromName("Inter", Enum.FontWeight.Bold),
        },
    },
} as Configs;
