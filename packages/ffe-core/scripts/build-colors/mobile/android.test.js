const mockWrite = jest.fn();
const mockWriteToFile = jest.fn(() => mockWrite);

jest.mock("../../utils.cjs", () => ({
  writeToFile: mockWriteToFile,
}));

const android = require("./android.cjs");

describe("android.cjs", () => {
  describe("transformToAndroidHex", () => {
    it("should convert #hex to C0xFF... (uppercase)", () => {
      expect(android.transformToAndroidHex("#123abc")).toBe("C0xFF123ABC");
      expect(android.transformToAndroidHex("#ABCDEF")).toBe("C0xFFABCDEF");
    });

    it("should convert 0x hex to uppercase", () => {
      expect(android.transformToAndroidHex("0xFFAABBCC")).toBe("0XFFAABBCC");
    });

    it("should throw on invalid format", () => {
      expect(() => android.transformToAndroidHex("red")).toThrow(
        "Invalid color format"
      );
      expect(() => android.transformToAndroidHex("123456")).toThrow(
        "Invalid color format"
      );
      expect(() => android.transformToAndroidHex("")).toThrow(
        "Invalid color format"
      );
    });
  });

  describe("transformToAndroidColorName", () => {
    it("should convert dot notation to camelCase", () => {
      expect(android.transformToAndroidColorName("primary.color")).toBe(
        "primaryColor"
      );
      expect(android.transformToAndroidColorName("a.b.c")).toBe("aBC");
      expect(android.transformToAndroidColorName("single")).toBe("single");
    });

    it("should handle empty string", () => {
      expect(android.transformToAndroidColorName("")).toBe("");
    });
  });

  describe("generateAndroidColorFileContent", () => {
    it("should generate Kotlin color file content", () => {
      const colors = {
        "primary.color": "#123456",
        "secondary.color": "#abcdef",
      };
      const content = android.generateAndroidColorFileContent(colors);
      expect(content).toContain("val primaryColor = Color(C0xFF123456)");
      expect(content).toContain("val secondaryColor = Color(C0xFFABCDEF)");
      expect(content).toContain(
        "package com.<domain_name>.<app_name>.ui.theme"
      );
    });

    it("should throw if color value is invalid", () => {
      const colors = { "bad.color": "notacolor" };
      expect(() => android.generateAndroidColorFileContent(colors)).toThrow(
        "Invalid color format"
      );
    });
  });

  describe("buildAndroidColors", () => {
    it("should call writeToFile for each color variant", () => {
      const paths = ["/tmp/test"];
      const colors = {
        light: { "a.b": "#111111" },
        dark: { "a.b": "#222222" },
        lightAccent: { "a.b": "#333333" },
        darkAccent: { "a.b": "#444444" },
      };

      android.buildAndroidColors(paths, colors);

      expect(mockWriteToFile).toHaveBeenCalledTimes(4);
      expect(mockWriteToFile).toHaveBeenCalledWith(
        "/tmp/test/ColorsDefaultLight.kt"
      );
      expect(mockWriteToFile).toHaveBeenCalledWith(
        "/tmp/test/ColorsDefaultDark.kt"
      );
      expect(mockWriteToFile).toHaveBeenCalledWith(
        "/tmp/test/ColorsAccentLight.kt"
      );
      expect(mockWriteToFile).toHaveBeenCalledWith(
        "/tmp/test/ColorsAccentDark.kt"
      );
      expect(mockWrite).toHaveBeenCalledTimes(4);
    });
  });
});
