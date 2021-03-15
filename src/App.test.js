import { render, fireEvent, queryAllByTitle, getByText, findAllByTitle } from "@testing-library/react";
import App from "./App";

test("render react App", () => {
    const { queryByTitle } = render(<App />);
    const btn = queryByTitle("btnTest");
    const input = queryByTitle("inputTest");
    expect(btn).toBeTruthy();
    expect(input).toBeTruthy();
  });

test("Simulasi menambah todo", () => {
    const { queryByTitle } = render(<App />);
    const btn = queryByTitle("btnTest");
    const input = queryByTitle("inputTest");

    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "test 1" } });
    fireEvent.click(btn);
    const hasil = queryByTitle("hasilTest");
    expect(input.value).toBe("");
    expect(hasil.innerHTML).toBe("test 1");
});

test("Simulasi menambah 2 todo", () => {
    const { queryByTitle, queryAllByTitle } = render(<App />);
    const btn = queryByTitle("btnTest");
    const input = queryByTitle("inputTest");

    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "todo 1" } });
    fireEvent.click(btn);
    let hasil = queryAllByTitle("hasilTest");
    expect(input.value).toBe("");
    expect(hasil[0].innerHTML).toBe("todo 1");
    fireEvent.change(input, { target: { value: "todo 2" } });
    fireEvent.click(btn);
    hasil = queryAllByTitle("hasilTest");
    expect(hasil[1].innerHTML).toBe("todo 2");
    expect(hasil).toHaveLength(2);
});

test("Simulasi menambah todo kosong", () => {
    const { queryByTitle, queryAllByTitle } = render(<App />);
    const btn = queryByTitle("btnTest");
    const input = queryByTitle("inputTest");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(btn);
    let hasil = queryByTitle("hasilTest");
    expect(hasil).toBeUndefined;
});

test("Button count 2x", () => {
    const { queryByTitle } = render(<App />);
    const btn = queryByTitle("btnTest");
    const input = queryByTitle("inputTest");

    fireEvent.change(input, { target: { value: "test" } });
    expect(btn.innerHTML).toBe("Add #1");
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe("Add #2");
});


