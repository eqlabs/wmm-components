if (!localStorage.getItem('userId'))
  localStorage.setItem('userId', uuidv4())

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

/**
 * userId is an unique (uuidv4) identifier for each user that is stored in localStorage.
 * It is used to connect receipts and media data streams to same account.
 */
export const userId = localStorage.getItem('userId')