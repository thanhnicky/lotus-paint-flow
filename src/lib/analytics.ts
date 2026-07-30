// Google Tag Manager (GTM-T5PGMZ8D) Event Tracking Helper
// All events push to dataLayer; GA4/Google Ads tags are configured inside the GTM container.

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Track GA4 event via GTM dataLayer
 */
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...parameters });
    console.log('[GTM] Event tracked:', eventName, parameters);
  }
}

/**
 * Track Google Ads conversion via GTM dataLayer
 */
export function trackConversion(conversionLabel?: string, value?: number) {
  trackEvent('conversion', { conversion_label: conversionLabel, value, currency: 'VND' });
}

/**
 * Track Google Ads lead conversion via GTM dataLayer
 */
export function trackLeadConversion(value?: number) {
  trackEvent('lead_conversion', { value, currency: 'VND' });
}

/**
 * Track page view via GTM dataLayer
 */
export function trackPageView(pagePath: string, pageTitle: string) {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
}

/**
 * E-commerce Events
 */

// View content - khi user xem sản phẩm/bảng màu
export function trackViewContent(
  itemName: string,
  category: string,
  itemId?: string
) {
  trackEvent('view_item', {
    items: [
      {
        item_id: itemId || '',
        item_name: itemName,
        item_category: category,
      },
    ],
  });
}

// Add to cart - khi user chọn màu/sản phẩm
export function trackAddToCart(
  itemName: string,
  category: string,
  price: number,
  quantity: number = 1,
  itemId?: string
) {
  trackEvent('add_to_cart', {
    currency: 'VND',
    value: price * quantity,
    items: [
      {
        item_id: itemId || '',
        item_name: itemName,
        item_category: category,
        price: price,
        quantity: quantity,
      },
    ],
  });
}

// Begin checkout - khi user bắt đầu điền thông tin
export function trackBeginCheckout(
  totalValue: number,
  items: Array<{ name: string; category: string; price: number; quantity: number }>
) {
  trackEvent('begin_checkout', {
    currency: 'VND',
    value: totalValue,
    items: items.map((item) => ({
      item_name: item.name,
      item_category: item.category,
      price: item.price,
      quantity: item.quantity,
    })),
  });
}

// Purchase - khi đặt hàng thành công
export function trackPurchase(
  transactionId: string,
  totalValue: number,
  items: Array<{ name: string; category: string; price: number; quantity: number }>,
  paymentMethod: string
) {
  trackEvent('purchase', {
    transaction_id: transactionId,
    currency: 'VND',
    value: totalValue,
    payment_method: paymentMethod,
    items: items.map((item) => ({
      item_name: item.name,
      item_category: item.category,
      price: item.price,
      quantity: item.quantity,
    })),
  });

  // Track Google Ads conversion
  trackConversion(undefined, totalValue);
}

// Generate lead - khi user gửi form liên hệ/Zalo/Email
export function trackGenerateLead(method: 'zalo' | 'form' | 'email', category?: string) {
  trackEvent('generate_lead', {
    method: method,
    category: category || 'contact',
  });
}

// Custom event - click CTA buttons
export function trackClickCTA(ctaName: string, location: string) {
  trackEvent('click_cta', {
    cta_name: ctaName,
    location: location,
  });
}
