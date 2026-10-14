export function toSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const STRENGTH_SCALE = ["Mild", "Mild-Medium", "Medium", "Medium-Full", "Full"];

export function strengthLevel(strength) {
  return STRENGTH_SCALE.indexOf(strength) + 1;
}
