
/**
 * @file Handles user specific accounts with **balance**s that increase
 * with **deposit**s from receipt verified WebMonetization payments
 * and are **deduct**ed when streaming media data to the client.
 */

const accounts = new Map() // userId:String => amount:Number

/**
 * newAccountBalance has two functions:
 * 1. Speed up the inital load of media by allowing some content to be loaded
 *    before the wallet is ready to pay (this can take few seconds).
 * 2. Create a "preview" mode where some content can be shown also to users
 *    that don't have wallet set up, while instructing them to set up a wallet
 *    once the initial balance has run out.
 */
var newAccountBalance = 0
export const setInitialBalance = val => newAccountBalance = val

export function balance(userId) {
  if (!accounts.has(userId))
    accounts.set(userId, newAccountBalance)
  return accounts.get(userId)
}
function deduct(userId, amount) {
  accounts.set(userId, balance(userId) - amount)
}

export function deposit(userId, amount) {
  accounts.set(userId, balance(userId) + amount)
  return balance(userId)
}
export function spend(userId, amount) {
  if (balance(userId) > amount) {
    deduct(userId, amount)
    return true
  }
  return false
}