/**
 * Handles user specific accounts with **balance**s that increase
 * with **deposit**s from receipt verified WebMonetization payments
 * and are **deduct**ed when streaming media data to the client.
 */

const accounts = new Map() // userId:String => amount:Number

/**
 * paywallThreshold has two functions:
 * 1. Speed up the inital load of media by allowing some content to be loaded
 *    before the wallet is ready to pay (this can take few seconds).
 * 2. Create a "preview" mode where some content can be shown also to users
 *    that don't have wallet set up, while instructing them to set up a wallet
 *    once the initial balance has run out.
 */
var paywallThreshold = 0
export const setPaywallThreshold = val => paywallThreshold = val

/**
 * Get users specific account balance. Creates and returns
 * initial amount for new users ("paywallThreshold"),
 * if user don't exist.
 * @param {string} userId
 * @returns {number} users balance
 */
export function balance(userId) {
  if (!accounts.has(userId))
    accounts.set(userId, paywallThreshold)
  return accounts.get(userId)
}

/**
 * Increments user specific account with given amount.
 * @param {string} userId
 * @param {number} amount amount to be deposited
 * @returns {number} users balance after the deposit.
 */
export function deposit(userId, amount) {
  accounts.set(userId, balance(userId) + amount)
  return balance(userId)
}

/**
 * Deducts given amount from users account, if the accounts balance is
 * equal or larger to the given amount.
 * @param {string} userId
 * @param {number} amount to be spent
 * @returns {boolean} true for succesfull action, false for failure.
 */
export function spend(userId, amount) {
  if (balance(userId) > amount) {
    deduct(userId, amount)
    return true
  }
  return false
}

function deduct(userId, amount) {
  accounts.set(userId, balance(userId) - amount)
}