test("string", () => {
    const name = "Rakamin Academy"

    expect(name).toBe("Rakamin Academy")
    expect(name).toEqual("Rakamin Academy")
    expect(name).toMatch(/amin/)
    // %amin%
})