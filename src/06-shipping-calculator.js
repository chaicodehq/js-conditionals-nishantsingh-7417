/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (return 0)
 *   - International orders over $100 get FREE shipping (return 0)
 *
 * Rules:
 *   - If weight is 0 or negative, return -1
 *   - If orderTotal is negative, return -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @returns {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */
export function calculateShipping(weight, country, orderTotal) {
// check weight and ordertotal is negative or 0
  if(weight <= 0 || orderTotal <0)
     return -1;
// condition for free shipping for domestic and international shipping
  if(country === "US" && orderTotal > 50)
    return 0;
  if(country !== "US" && orderTotal > 100)
    return 0;
// charges for domestic shipping
  if(country === "US"){
    if(weight <= 1)
        return 5;
    if(weight <= 5)
        return 10;
    if(weight > 5)
        return 15;
  }
// charges for international shipping
  if(country !== "US"){
    if(weight <= 1)
        return 15;
    if(weight <= 5)
        return 25;
    if(weight > 5)
        return 40;
  }
}
