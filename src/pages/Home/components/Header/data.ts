export interface CityOption {
  readonly value: string;
  readonly label: string;
}

export const cityOptions: readonly CityOption[] = [
  { value: "Kyiv", label: "Kyiv" },
  { value: "Paris", label: "Paris" },
  { value: "London", label: "London" },
  { value: "New York", label: "New York" },
];
