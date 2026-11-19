import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { readFileSync } from "node:fs";
import Nav from "../src/components/Nav";
import Hero from "../src/sections/Hero";
import Subscribe from "../src/sections/Subscribe";
import App from "../src/App";

it("opens the mobile menu, follows a link, and closes on Escape", () => {
  render(<Nav />);
  fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
  expect(screen.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true");
  fireEvent.keyDown(document, { key: "Escape" });
  expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
  fireEvent.click(screen.getAllByRole("link", { name: "Products" }).at(-1));
  expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
});
it("changes the hero image with an accessible shoe selector", () => {
  render(<Hero />);
  const initial = screen.getByAltText("Shoe collection").getAttribute("src");
  fireEvent.click(screen.getByRole("button", { name: "View shoe style 2" }));
  expect(screen.getByAltText("Shoe collection").getAttribute("src")).not.toBe(initial);
  expect(screen.getByRole("button", { name: "View shoe style 2" })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("button", { name: "View shoe style 1" })).toHaveAttribute("aria-pressed", "false");
});
it("uses working section links for every internal navigation target", () => {
  const { container } = render(<App />);
  for (const link of container.querySelectorAll('a[href^="#"]')) expect(container.querySelector(link.getAttribute("href"))).not.toBeNull();
  expect(screen.queryByText("Special Offer", { exact: true })).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Explore products" })).toHaveAttribute("href", "#products");
});
it("validates email and does not claim to send data in the local preview", () => {
  render(<Subscribe />);
  const email = screen.getByLabelText("Email address");
  fireEvent.change(email, { target: { value: "bad-address" } });
  expect(email.checkValidity()).toBe(false);
  fireEvent.change(email, { target: { value: "sample@example.test" } });
  fireEvent.submit(email.closest("form"));
  expect(screen.getByRole("status")).toHaveTextContent("does not send your email");
});
it("includes the newsletter fields in deploy-time HTML for Netlify detection", () => {
  const html = readFileSync("index.html", "utf8");
  expect(html).toMatch(/name="collection-updates"/);
  expect(html).toMatch(/data-netlify="true"/);
  expect(html).toMatch(/name="email"/);
  expect(html).toMatch(/name="company"/);
});
