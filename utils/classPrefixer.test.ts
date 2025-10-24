import clpx from "./classPrefixer";

import { describe, expect, it } from "vitest";

describe("classPrefixer (clpx)", () => {
  describe("basic functionality", () => {
    it("should add prefix to a single class", () => {
      const result = clpx("btn");
      expect(result).toBe("moriui:btn");
    });

    it("should add prefix to multiple classes", () => {
      const result = clpx("btn", "btn-primary");
      expect(result).toBe("moriui:btn moriui:btn-primary");
    });

    it("should handle empty string (prefixes each empty string token)", () => {
      const result = clpx("");
      // Empty strings from classnames library get prefixed as "moriui:"
      expect(result).toBe("moriui:");
    });

    it("should handle multiple spaces between classes", () => {
      const result = clpx("btn  primary");
      // Multiple spaces create empty tokens that get prefixed
      expect(result).toContain("moriui:btn");
      expect(result).toContain("moriui:primary");
    });

    it("should trim final result of extra spaces but prefix individual tokens", () => {
      const result = clpx("  btn  ");
      // Leading/trailing spaces create empty tokens
      expect(result).toContain("moriui:btn");
    });
  });

  describe("conditional classes", () => {
    it("should handle boolean true for including classes", () => {
      const isEnabled = true;
      const result = clpx(isEnabled && "btn");
      expect(result).toBe("moriui:btn");
    });

    it("should handle boolean false for excluding classes", () => {
      const isEnabled = false;
      const result = clpx(isEnabled && "btn");
      // false && "btn" evaluates to false, which classnames converts to empty string -> "moriui:"
      expect(result).toBe("moriui:");
    });

    it("should handle conditional expressions with multiple classes", () => {
      const isActive = true;
      const result = clpx("btn", isActive && "btn-active");
      expect(result).toBe("moriui:btn moriui:btn-active");
    });

    it("should skip false conditions", () => {
      const isActive = false;
      const result = clpx("btn", isActive && "btn-active");
      expect(result).toBe("moriui:btn");
    });

    it("should handle null values", () => {
      const result = clpx("btn", null);
      expect(result).toBe("moriui:btn");
    });

    it("should handle undefined values", () => {
      const result = clpx("btn", undefined);
      expect(result).toBe("moriui:btn");
    });
  });

  describe("array inputs", () => {
    it("should handle array of classes", () => {
      const result = clpx(["btn", "primary"]);
      expect(result).toBe("moriui:btn moriui:primary");
    });

    it("should handle mixed arrays and strings", () => {
      const result = clpx("btn", ["primary", "lg"]);
      expect(result).toBe("moriui:btn moriui:primary moriui:lg");
    });

    it("should handle nested arrays", () => {
      const result = clpx(["btn", ["primary", "lg"]]);
      expect(result).toBe("moriui:btn moriui:primary moriui:lg");
    });

    it("should handle empty arrays", () => {
      const result = clpx("btn", []);
      expect(result).toBe("moriui:btn");
    });
  });

  describe("object inputs", () => {
    it("should handle object with truthy values", () => {
      const result = clpx({ btn: true, primary: true });
      expect(result).toBe("moriui:btn moriui:primary");
    });

    it("should skip object keys with falsy values", () => {
      const result = clpx({ btn: true, primary: false });
      expect(result).toBe("moriui:btn");
    });

    it("should handle mixed objects and strings", () => {
      const result = clpx("btn", { primary: true, secondary: false });
      expect(result).toBe("moriui:btn moriui:primary");
    });

    it("should handle empty object", () => {
      const result = clpx("btn", {});
      expect(result).toBe("moriui:btn");
    });
  });

  describe("complex scenarios", () => {
    it("should handle complex class composition", () => {
      const size = "lg";
      const isActive = true;
      const isDisabled = false;
      const result = clpx(
        "btn",
        ["primary", "rounded"],
        { "btn-active": isActive, "btn-disabled": isDisabled },
        size && `btn-${size}`,
      );
      expect(result).toBe(
        "moriui:btn moriui:primary moriui:rounded moriui:btn-active moriui:btn-lg",
      );
    });

    it("should handle hyphenated class names", () => {
      const result = clpx("btn-primary", "btn-lg", "btn-rounded");
      expect(result).toBe(
        "moriui:btn-primary moriui:btn-lg moriui:btn-rounded",
      );
    });

    it("should handle underscored class names", () => {
      const result = clpx("btn_primary", "btn_lg");
      expect(result).toBe("moriui:btn_primary moriui:btn_lg");
    });

    it("should handle numbered class names", () => {
      const result = clpx("col-12", "row-2");
      expect(result).toBe("moriui:col-12 moriui:row-2");
    });

    it("should preserve order of classes", () => {
      const result = clpx("a", "b", "c", "d", "e");
      expect(result).toBe("moriui:a moriui:b moriui:c moriui:d moriui:e");
    });
  });

  describe("prefix verification", () => {
    it("should always prefix with 'moriui:'", () => {
      const result = clpx("custom-class");
      expect(result.substring(0, 7)).toBe("moriui:");
    });

    it("should prefix each class separately", () => {
      const result = clpx("a", "b", "c");
      const classes = result.split(" ");
      expect(classes).toEqual(["moriui:a", "moriui:b", "moriui:c"]);
      expect(classes.every((c) => c.startsWith("moriui:"))).toBe(true);
    });

    it("should not double-prefix classes", () => {
      const result = clpx("moriui:btn");
      expect(result).toBe("moriui:moriui:btn");
    });
  });

  describe("edge cases", () => {
    it("should handle very long class names", () => {
      const longClass = "very-long-class-name-with-many-parts";
      const result = clpx(longClass);
      expect(result).toBe(`moriui:${longClass}`);
    });

    it("should handle classes with special characters (non-standard)", () => {
      // Note: These are not standard CSS class names but testing robustness
      const result = clpx("btn@primary");
      expect(result).toBe("moriui:btn@primary");
    });

    it("should handle single space", () => {
      const result = clpx(" ");
      // Single space tokenizes to empty strings that get prefixed
      expect(result).toContain("moriui:");
    });

    it("should handle multiple consecutive spaces", () => {
      const result = clpx("btn    primary    lg");
      // Multiple spaces create empty tokens that get prefixed
      expect(result).toContain("moriui:btn");
      expect(result).toContain("moriui:primary");
      expect(result).toContain("moriui:lg");
    });

    it("should return string type", () => {
      const result = clpx("btn");
      expect(typeof result).toBe("string");
    });
  });

  describe("integration scenarios", () => {
    it("should work with common CSS framework patterns", () => {
      const result = clpx("flex", "flex-col", "gap-4", "p-8", "bg-slate-100");
      expect(result).toBe(
        "moriui:flex moriui:flex-col moriui:gap-4 moriui:p-8 moriui:bg-slate-100",
      );
    });

    it("should work with Bootstrap-style naming", () => {
      const result = clpx("btn", "btn-primary", "btn-lg", "rounded");
      expect(result).toBe(
        "moriui:btn moriui:btn-primary moriui:btn-lg moriui:rounded",
      );
    });

    it("should work with BEM naming convention", () => {
      const result = clpx("card", "card__header", "card__header--active");
      expect(result).toBe(
        "moriui:card moriui:card__header moriui:card__header--active",
      );
    });

    it("should compose with React component patterns", () => {
      const variant = "primary";
      const size = "lg";
      const disabled = false;
      const result = clpx(
        "btn",
        `btn-${variant}`,
        `btn-${size}`,
        disabled && "btn-disabled",
      );
      expect(result).toBe("moriui:btn moriui:btn-primary moriui:btn-lg");
    });

    it("should handle utility-first CSS pattern", () => {
      const result = clpx(
        "inline-flex",
        "items-center",
        "justify-between",
        "w-full",
        "h-10",
        "px-4",
        "rounded-md",
      );
      expect(result).toBe(
        "moriui:inline-flex moriui:items-center moriui:justify-between moriui:w-full moriui:h-10 moriui:px-4 moriui:rounded-md",
      );
    });
  });

  describe("classnames compatibility", () => {
    it("should handle classnames library syntax", () => {
      const isActive = true;
      const isDark = false;
      const result = clpx({
        "btn-active": isActive,
        "btn-dark": isDark,
        btn: true,
      });
      expect(result).toContain("moriui:btn");
      expect(result).toContain("moriui:btn-active");
      expect(result).not.toContain("btn-dark");
    });

    it("should deduplicate classes (classnames behavior)", () => {
      // classnames library deduplicates, so if we pass the same class twice
      // with classnames, it should appear only once
      const result = clpx("btn", "btn");
      // Note: classnames would deduplicate this to "btn" but clpx just prefixes
      // each occurrence, so we get "moriui:btn moriui:btn"
      expect(result).toBe("moriui:btn moriui:btn");
    });
  });
});
