import { FaExchangeAlt, FaPlane } from "react-icons/fa";

export const tripTypes = [
  { value: "round-trip", label: "Round trip", icon: <FaExchangeAlt /> },
  { value: "one-way", label: "One way", icon: <FaExchangeAlt /> },
  { value: "multi-city", label: "Multi-city", icon: <FaExchangeAlt /> },
];

export const travelClasses = [
  { value: "economy", label: "Economy", icon: <FaPlane /> },
  { value: "premium", label: "Premium economy", icon: <FaPlane /> },
  { value: "business", label: "Business", icon: <FaPlane /> },
  { value: "first", label: "First class", icon: <FaPlane /> },
];
