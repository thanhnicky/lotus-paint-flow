// Google Analytics 4 & Google Ads Event Tracking Helper

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// GA4 Measurement ID
const GA4_MEASUREMENT_ID = 'G-13XJT8M29C';

// Google Ads Conversion ID
const ADS_CONVERSION_ID = 'AW-16701011893';

// Google Ads Conversion Labels (sẽ được cập nhật sau khi user tạo conversion actions)
const ADS_PURCHASE_LABEL = process.env.NEXT_PUBLIC_GADS_PURCHASE_LABEL || '';
const ADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GADS_LEAD_LABEL || '';

/**
 * Track GA4 event
 */
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
    console.log('[GA4] Event tracked:', eventName, parameters);
  }
}

/**
 * Track Google Ads conversion
 */
export function trackConversion(conversionLabel?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag && ADS_CONVERSION_ID) {
    const label = conversionLabel || ADS_PURCHASE_LABEL;
    if (label) {
      window.gtag('event', 'conversion', {
        send_to: `${ADS_CONVERSION_ID}/${label}`,
        value: value,
        currency: 'VND',
      });
      console.log('[GAds] Conversion tracked:', label, value);
    }
  }
}

/**
 * Track Google Ads lead conversion
 */
export function trackLeadConversion(value?: number) {
  if (typeof window !== 'undefined' && window.gtag && ADS_CONVERSION_ID && ADS_LEAD_LABEL) {
    window.gtag('event', 'conversion', {
      send_to: `${ADS_CONVERSION_ID}/${ADS_LEAD_LABEL}`,
      value: value,
      currency: 'VND',
    });
    console.log('[GAds] Lead conversion tracked:', ADS_LEAD_LABEL, value);
  }
}

/**
 * Track page view (GA4 tự động track, nhưng có thể dùng cho custom page views)
 */
export function trackPageView(pagePath: string, pageTitle: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
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
