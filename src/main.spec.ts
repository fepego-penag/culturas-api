jest.mock("./app.module", () => ({ AppModule: jest.fn() }));
jest.mock("@nestjs/common", () => ({
  ValidationPipe: jest.fn(),
  VersioningType: jest.fn(),
}));
jest.mock("@nestjs/core", () => ({
  NestFactory: {
    create: () => ({
      enableVersioning: jest.fn(),
      useGlobalPipes: jest.fn(),
      listen: jest.fn(),
    }),
  },
}));

describe("main", () => {
  it("should load main", () => {
    const test = require("./main");
    expect(test).toBeTruthy();
  });
});
