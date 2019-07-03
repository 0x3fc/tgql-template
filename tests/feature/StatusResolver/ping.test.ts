import { call } from "../../lib/services";

describe("StatusResolver :: ping", () => {
  it("ping successfully", async () => {
    const source = `{ping}`;

    const res = await call({ source });

    expect(res).toMatchObject({
      data: { ping: "pong" },
    });
  });
});
