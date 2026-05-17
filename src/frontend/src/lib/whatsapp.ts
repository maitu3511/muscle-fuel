const WHATSAPP_NUMBER = "918460107287";
const BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export interface OrderDetails {
  productName: string;
  flavor: string;
  quantity: number;
  price: string;
}

export function buildWhatsAppOrderUrl(details: OrderDetails): string {
  const message = `Hi, I want to order ${details.productName}. Flavor: ${details.flavor}. Quantity: ${details.quantity}. Please share price and delivery details.`;
  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppInquiryUrl(): string {
  const message =
    "Hi, I want to order Muscle Fuel Whey Protein. Please share price and delivery details.";
  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_FLOAT_URL = buildWhatsAppInquiryUrl();

export function openWhatsApp(url: string): void {
  window.open(url, "_blank", "noopener,noreferrer");
}
