import { buildQuery } from "./api";

describe("Articles api", () => {
  describe("#buildQuery", () => {
    it("correctly sets page and topic", () => {
      const args = {
        page: 3,
        filters: { topic: "travel" }
      };
      const result = buildQuery(args);

      expect(result).toEqual("page=3&q=travel");
    });

    it("correctly sets sortBy", () => {
      const args = {
        page: 3,
        filters: { topic: "travel", sortBy: "popularity" }
      };
      const result = buildQuery(args);

      expect(result).toEqual("page=3&q=travel&sortBy=popularity");
    });
  });
});
