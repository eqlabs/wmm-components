
/**
 * @file Handles user specific accounts with **balance**s that increase
 * with **deposit**s from receipt verified WebMonetization payments
 * and are **deduct**ed when streaming media data to the client.
 */

const accounts = new Map() // userId:String => amount:Number

export function balance(userId) {
  return accounts.get(userId) || 0
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