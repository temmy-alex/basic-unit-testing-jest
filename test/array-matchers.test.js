test("array", () => {
    const names = ["Rakamin", "Academy"]
    expect(names).toContain("Rakamin")
    expect(names).toEqual(["Rakamin", "Academy"])

    const person = [{name: "User 1"}, {name: "User 2"}]
    expect(person).toContainEqual({name: "User 1"})
    expect(person).toEqual([{name: "User 1"}, {name: "User 2"}])
})