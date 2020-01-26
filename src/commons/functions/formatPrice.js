export default function formatPrice(price) {
  return `${
    price.currency === "ARS" ? "$ " : "U$S "
  }${price.amount.toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".")}`;
}
